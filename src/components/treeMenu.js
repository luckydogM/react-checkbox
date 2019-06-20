import React from 'react';
import './treeMenu.css';
import {
  message,
  Checkbox,
  Spin
} from 'antd';

import TreeNode from './treeNode.js';

export default class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: this.props.value || [],
      disabled: this.props.disabled,
      loading: false,
    };
  }

  staticPro = {
    datas: {},
    relationShip: {}
  }

  componentWillMount() {
    if (!Array.prototype.subsetTo) { // arr.subsetTo(brr)  arr是否为brr的子集
      Array.prototype.subsetTo = function(arr) {
        return this.every(v=>arr.includes(v));
      };
    }

    let tmpData = this.handleData(JSON.parse(JSON.stringify(this.props.data)));
    this.staticPro.datas = this.plain2Tree(tmpData);
  }

  componentWillReceiveProps(nextProps) {
    let tmpData = this.handleData(JSON.parse(JSON.stringify(nextProps.data)));
    
    this.staticPro.datas = this.plain2Tree(tmpData);
    
    if (nextProps.value && nextProps.value.length > 0) {
      this.setState({
        loading: false
      });
    }
    this.setState({
      value: nextProps.value || [],
    });
  }

  listenCheck = (obj) => {
    this.setState({
      value: obj.checkList || []
    });
    if (this.props.onChange && typeof(this.props.onChange) == 'function') {
      this.props.onChange({checkList: obj.checkList});
    }
  }

  unique (arr) { // 数组去重
    var x = new Set(arr);
    return [...x];
  }

  arrayIntersection(arr1, arr2){ // 返回数组的交集
    let arr3 = arr2.filter(function(v){
      if (JSON.stringify(arr1).indexOf('","') > -1) {
        return arr1.indexOf(v + '') !== -1;
      } else {
        return arr1.indexOf(v) !== -1;
      }
    });
    return arr3;
  }

  plain2Tree = (obj) => {
    let key;
    let res = {};
    let _this = this;
    let {relationShip} = this.staticPro;
    for (key in obj) {
      let val = obj[key];
      var parent = val.parentId;
      if (parent === '') {
        res = val;
      } else {
        if (!obj[parent].children) {
          obj[parent].children = [];
        }
        obj[parent].children.push(val);

        if (Array.isArray(relationShip[parent])) {
          relationShip[parent].push(val.id);
        } else {
          relationShip[parent] = [val.id];
        }
      }
    }
    // 遍历 relationShip 合并父子集 
    var keysArr = Object.keys(relationShip);
    keysArr.map((key,i)=>{
      var similarArr = _this.arrayIntersection(keysArr, relationShip[key]);
      if (similarArr && similarArr.length > 0) {
        similarArr.map((item,m)=>{
          relationShip[key] = relationShip[key].concat(relationShip[item]);
          relationShip[key] = this.unique(relationShip[key]);
        });
      }
    });

    return res;
  }

  isChecked (item) {
    if (item.children && this.state.value.indexOf(item.id) > -1) { // 若当前节点是父节点并且接口返回的数据认为已经选中了 则判断是否旗下所有子节点都选中
      let childList = this.staticPro.relationShip[item.id];
      if (childList.subsetTo(this.state.value)) {
        return true;
      } else {
        return false;
      }
    } else {
      return this.state.value.indexOf(item.id) > -1;
    }
  }

  handleData = (arr) => {
    var data = {};
    for (var i = 0;i < arr.length;i++){
      var val = arr[i];
      data[val.id] = val;
    }
    data[-1] = {parentId: '', name: 'root'};
    return data;
  }

  hasParentClass(item) {
    let flag = false;
    if (item.children) { // 若当前节点是父节点并且接口返回的数据认为已经选中了 则判断是否旗下所有子节点都选中
      let childList = this.staticPro.relationShip[item.id];
      if (!childList.subsetTo(this.state.value)) {
        var similerArr = this.arrayIntersection(this.state.value, childList);
        if (similerArr && similerArr.length > 0) {
          flag = true; 
        }
      }
    }
    return flag;
  }

  renderTree = (sub, n, arr) => { //递归出所有菜单项，及子菜单等ant-checkbox-indeterminate
    var _this = this;
    var treeList = [];
    return (
      <TreeNode title={n} data={sub} rights={_this.state.value} indeterminate={this.hasParentClass(sub)} relationShip={this.staticPro.relationShip} parentRealation={arr.concat([sub.parentId])} className="parent-node" changeCheck={this.listenCheck} checked={this.isChecked(sub)} disabled={this.state.disabled}>
        {
          sub.children.map((item,i) => {
            return (
              item.children ? _this.renderTree(item, n + 1, []) : <TreeNode data={item} indeterminate={this.hasParentClass(item)} relationShip={this.staticPro.relationShip} parentRealation={arr.concat([sub.parentId,item.parentId])} title={n + 1} rights={_this.state.value} changeCheck={this.listenCheck} checked={this.isChecked(item)} disabled={this.state.disabled}/>
            );
          })
        }
      </TreeNode>
    );
  }
  
  getChild = (list) => {
    var _this = this;
    return (
      <React.Fragment>
        {
          list.children && list.children.length > 0 && list.children.map((item, index)=>{
            return (
              item.children ? _this.renderTree(item, 1, []) : <TreeNode data={item} title={1} indeterminate={this.hasParentClass(item)} parentRealation={[item.parentId]} rights={_this.state.value} changeCheck={this.listenCheck} checked={this.state.value.indexOf(item.id) > -1} relationShip={this.staticPro.relationShip} disabled={this.state.disabled}/>
            );
          })
        }
      </React.Fragment>
    );
  }

  render(){
    let _this = this;
    let {datas} = this.staticPro;
    let {loading} = this.state;

    return (
      <div className="v-system-treemenu">
        {loading && <div className="tree-menu-loading">
          <Spin />
        </div>}
        {this.getChild(datas)}
      </div>
    );
  }
}
