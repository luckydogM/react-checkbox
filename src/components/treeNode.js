import React from 'react';

import {
  message,
  Checkbox
} from 'antd';

export default class extends React.Component {
  constructor(props) {
    super(props);
  }

  state = {
    data: this.props.data,
    expand: false,
    indeterminate: this.props.indeterminate
  }

  staticPro = {
    checkList: this.props.rights || [],
    hasChild: !!this.props.data.children,
    relationShip: this.props.relationShip
  }

  componentWillMount(){
    if (!Array.prototype.subsetTo) {
      Array.prototype.subsetTo = function(arr){
        return this.every(v=>arr.includes(v));
      };
    }
    if (!!this.props.data.children) {
      if (this.initExpandStatus(this.props.data.id)) {
        this.setState({
          expand: true
        });
      }
    }
  }

  componentWillReceiveProps (nextProps) {
    this.staticPro.checkList = nextProps.rights;
    if (!!nextProps.data.children) {
      if (this.initExpandStatus(nextProps.data.id)) {
        this.setState({
          expand: true
        });
      }
    }
    this.setState({
      indeterminate: nextProps.indeterminate
    });
  }

  isInArr = (target, origin) => { // 检查是否是子集,重复检查
    let flag = false;
    for (var key in origin) {
      key = Number(key);
      if (origin[key].length > 0 && origin[key].subsetTo(target)) {
        if (target.indexOf(key) < 0) {
          target.push(key);
          flag = true;
        }
      }
    }
    if (flag) {
      this.isInArr(target, origin);
    }
  }

  unique (arr) { // 数组去重
    var x = new Set(arr);
    return [...x];
  }

  handleChange = (e,id,parentId,isParent) => {
    let {checkList, relationShip} = this.staticPro;
    if (e.target.checked) {
      
      checkList.push(id);
      if (isParent) { // 如果当前是父节点则子节点全部选中
        checkList = checkList.concat(relationShip[id] || []);
      }
      let beforeValue = checkList;
      this.isInArr(checkList, relationShip);
    } else {
      checkList = checkList.filter(function(item) { // 当前节点取消选中
        return item != id;
      });

      if (isParent) { // 如果当前是父节点则子节点全部取消选中
        let childList = relationShip[id] || [];
        childList.map((val, i)=>{
          checkList = checkList.filter(function(item) {
            return item != val;
          });
        });
      }

      let parentRealation = this.props.parentRealation;
      
      parentRealation.map((value, j)=>{ // 当前节点的父节点以及外层父节点都取消选中
        if (Number(value) != -1) {
          checkList = checkList.filter(function(item) {
            return item != value;
          });
        }
      });
    }

    checkList = this.unique(checkList);

    this.props.changeCheck({checkList: checkList});
  }

  initExpandStatus = (id) => { 
    let flag = false;
    let relationShip = this.staticPro.relationShip || [];

    relationShip[id].map((val, i)=>{
      if (this.staticPro.checkList.indexOf(val) > -1) {
        flag = true;
      }
    });

    return flag;
  }

  handleClick = (e) => {
    this.setState({
      expand: !this.state.expand
    });
  }

  nodeClass = () => {
    let classNames = 'iconfont';
    if (this.staticPro.hasChild) {
      if (this.state.expand) {
        classNames += ' iconjianqu';
      } else {
        classNames += ' icontianjia';
      }
    }
    return classNames;
  }

  parentClass = () => {
    let classNames = 'tree-node tree-node' + this.props.title + ' ';
    if (this.props.title > 2) {
      classNames += ' d-ib';
    }
    if (!!this.props.className) {
      classNames += this.props.className;
    }
    return classNames;
  }

  render(){
    var _this = this;
    let {data, expand, indeterminate} = this.state;
    return (
      <div className={this.parentClass()}>
        <Checkbox indeterminate={indeterminate} disabled={this.props.disabled} checked={this.props.checked} onChange={(e)=>{ _this.handleChange(e,data.id,data.parentId,this.staticPro.hasChild); }}>{data.name}</Checkbox>
        <i onClick={(e)=>{ this.handleClick(e); }} className={this.nodeClass()}/>
        {
          this.props.children && <div className={`collapse-menu ${expand ? 'expand' : ''}`}>
            {this.props.children}
          </div>
        }
      </div>
    );
  }
}
