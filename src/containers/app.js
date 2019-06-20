import React, {Component} from 'react';
// import {connect} from 'react-redux';

import Checkboxcomponent from '~/components/check.js';

import ReactJson from 'react-json-view'
import TreeMenu from '~/components/treeMenu.js';
import {
  Row, Col
} from 'antd';

let tmp=[{
  "id": 1,
  "parentId": -1,
  "name": "一级标题-1",
  "type": 0,
  "icon": null,
  "navigateUrl": null,
  "target": null,
  "sort": null,
  "status": 1
}, {
  "id": 2,
  "parentId": 29,
  "name": "二级标题2-29",
  "type": 0,
  "icon": null,
  "navigateUrl": null,
  "target": null,
  "sort": null,
  "status": 1
}, {
  "id": 3,
  "parentId": 29,
  "name": "二级标题3-29",
  "type": 0,
  "icon": null,
  "navigateUrl": null,
  "target": null,
  "sort": null,
  "status": 1
}, {
  "id": 4,
  "parentId": 30,
  "name": "二级标题4-30",
  "type": 0,
  "icon": null,
  "navigateUrl": null,
  "target": null,
  "sort": null,
  "status": 1
}, {
  "id": 5,
  "parentId": 30,
  "name": "二级标题5-30",
  "type": 0,
  "icon": null,
  "navigateUrl": null,
  "target": null,
  "sort": null,
  "status": 1
}, {
  "id": 6,
  "parentId": 31,
  "name": "二级标题6-31",
  "type": 0,
  "icon": null,
  "navigateUrl": null,
  "target": null,
  "sort": null,
  "status": 1
}, {
  "id": 7,
  "parentId": -1,
  "name": "一级标题-7",
  "type": 0,
  "icon": null,
  "navigateUrl": null,
  "target": null,
  "sort": null,
  "status": 1
}, {
  "id": 8,
  "parentId": -1,
  "name": "一级标题-8",
  "type": 0,
  "icon": null,
  "navigateUrl": null,
  "target": null,
  "sort": null,
  "status": 1
}, {
  "id": 9,
  "parentId": 1,
  "name": "二级标题-1",
  "type": 0,
  "icon": null,
  "navigateUrl": null,
  "target": null,
  "sort": null,
  "status": 1
}, {
  "id": 10,
  "parentId": 1,
  "name": "二级标题10-1",
  "type": 0,
  "icon": null,
  "navigateUrl": null,
  "target": null,
  "sort": null,
  "status": 1
}, {
  "id": 11,
  "parentId": 1,
  "name": "二级标题11-1",
  "type": 0,
  "icon": null,
  "navigateUrl": null,
  "target": null,
  "sort": null,
  "status": 1
}, {
  "id": 12,
  "parentId": 1,
  "name": "二级标题12-1",
  "type": 0,
  "icon": null,
  "navigateUrl": null,
  "target": null,
  "sort": null,
  "status": 1
}, {
  "id": 13,
  "parentId": 1,
  "name": "二级标题13-1",
  "type": 0,
  "icon": null,
  "navigateUrl": null,
  "target": null,
  "sort": null,
  "status": 1
}, {
  "id": 14,
  "parentId": 1,
  "name": "二级标题14-1",
  "type": 0,
  "icon": null,
  "navigateUrl": null,
  "target": null,
  "sort": null,
  "status": 1
}, {
  "id": 15,
  "parentId": 1,
  "name": "二级标题15-1",
  "type": 0,
  "icon": null,
  "navigateUrl": null,
  "target": null,
  "sort": null,
  "status": 1
}, {
  "id": 16,
  "parentId": 1,
  "name": "二级标题16-1",
  "type": 0,
  "icon": null,
  "navigateUrl": null,
  "target": null,
  "sort": null,
  "status": 1
}, {
  "id": 17,
  "parentId": 1,
  "name": "二级标题17-1",
  "type": 0,
  "icon": null,
  "navigateUrl": null,
  "target": null,
  "sort": null,
  "status": 1
}, {
  "id": 18,
  "parentId": 29,
  "name": "二级标题18-29",
  "type": 1,
  "icon": null,
  "navigateUrl": null,
  "target": null,
  "sort": null,
  "status": 1
}, {
  "id": 19,
  "parentId": 29,
  "name": "二级标题19-29",
  "type": 1,
  "icon": null,
  "navigateUrl": null,
  "target": null,
  "sort": null,
  "status": 1
}, {
  "id": 20,
  "parentId": 8,
  "name": "二级标题20-8",
  "type": 0,
  "icon": null,
  "navigateUrl": null,
  "target": null,
  "sort": null,
  "status": 1
}, {
  "id": 21,
  "parentId": 8,
  "name": "二级标题21-8",
  "type": 0,
  "icon": null,
  "navigateUrl": null,
  "target": null,
  "sort": null,
  "status": 1
}, {
  "id": 22,
  "parentId": 8,
  "name": "二级标题22-8",
  "type": 0,
  "icon": null,
  "navigateUrl": null,
  "target": null,
  "sort": null,
  "status": 1
}, {
  "id": 23,
  "parentId": 1,
  "name": "二级标题23-1",
  "type": 0,
  "icon": null,
  "navigateUrl": null,
  "target": null,
  "sort": null,
  "status": 1
}, {
  "id": 24,
  "parentId": 1,
  "name": "二级标题24-1",
  "type": 0,
  "icon": null,
  "navigateUrl": null,
  "target": null,
  "sort": null,
  "status": 1
}, {
  "id": 25,
  "parentId": 1,
  "name": "二级标题25-1",
  "type": 0,
  "icon": null,
  "navigateUrl": null,
  "target": null,
  "sort": null,
  "status": 1
}, {
  "id": 26,
  "parentId": 1,
  "name": "二级标题26-1",
  "type": 0,
  "icon": null,
  "navigateUrl": null,
  "target": null,
  "sort": null,
  "status": 1
}, {
  "id": 27,
  "parentId": 1,
  "name": "二级标题27-1",
  "type": 0,
  "icon": null,
  "navigateUrl": null,
  "target": null,
  "sort": null,
  "status": 1
}, {
  "id": 28,
  "parentId": -1,
  "name": "一级标题-28",
  "type": 0,
  "icon": null,
  "navigateUrl": null,
  "target": null,
  "sort": null,
  "status": 1
}, {
  "id": 29,
  "parentId": -1,
  "name": "一级标题-29",
  "type": 0,
  "icon": null,
  "navigateUrl": null,
  "target": null,
  "sort": null,
  "status": 1
}, {
  "id": 30,
  "parentId": -1,
  "name": "一级标题-30",
  "type": 0,
  "icon": null,
  "navigateUrl": null,
  "target": null,
  "sort": null,
  "status": 1
}, {
  "id": 31,
  "parentId": -1,
  "name": "一级标题-31",
  "type": 0,
  "icon": null,
  "navigateUrl": null,
  "target": null,
  "sort": null,
  "status": 1
}, {
  "id": 32,
  "parentId": 30,
  "name": "二级标题32-30",
  "type": 0,
  "icon": null,
  "navigateUrl": null,
  "target": null,
  "sort": null,
  "status": 1
}, {
  "id": 33,
  "parentId": 32,
  "name": "三级标题33-32-30",
  "type": 0,
  "icon": null,
  "navigateUrl": null,
  "target": null,
  "sort": null,
  "status": 1
}, {
  "id": 34,
  "parentId": 32,
  "name": "三级标题34-32-30",
  "type": 0,
  "icon": null,
  "navigateUrl": null,
  "target": null,
  "sort": null,
  "status": 1
}, {
  "id": 35,
  "parentId": 32,
  "name": "三级标题35-32-30",
  "type": 0,
  "icon": null,
  "navigateUrl": null,
  "target": null,
  "sort": null,
  "status": 1
}];

class App extends Component {
  state = {
    rights: "1,4,7,12",
    tmp: tmp
  }
  componentWillMount() {
  }

  translateRights (rights) {
    if (rights) {
      return rights.split(",").map((val,i)=>{ return Number(val); });
    } else {
      return [];
    }
  }

  onLimitChange(value) {
    this.setState({
      rights: value.join(",")
    });
  }

  render() {
    let {tmp, rights} =this.state;
    return (
      <div className="home">
        <div className="tips">
          数据格式按照示例给出的格式，只需要知道当前节点的父节点即可，一级标题的父节点为-1。
          <p>如此可实现无限层级嵌套的树结构，已经全选和反选功能。</p>
        </div>
        <Row>
          <Col span={12}>
            <div className="rights">
              <h3>选中的item的ID：</h3><span className="code">{rights}</span>
            </div>
            <div className="json-data">
              <h3>元数据：</h3>
              <ReactJson src={tmp}/>
            </div>
          </Col>
          <Col span={12}>
            <TreeMenu disabled={false} data={tmp} value={this.translateRights(rights)} onChange={(value)=>{ this.onLimitChange(value.checkList); }}/>
          </Col>
        </Row>
        
      </div>
    );
  }
}

export default App;
