import React, {Component} from 'react';


class Checkboxcomponent extends React.Component{
    constructor(props){
      super(props);
      this.state = {
        chooseList : ['apple','lemon','melon','orange'],
        chooseCheck : 0,
        Allchoose : false,
        reverseCheck : false,
        isAuto : false
      }
    }
    Allchoose(e){
      if (this.state.Allchoose) {
        this.setState({
          chooseCheck : 0,
          Allchoose : false,
          isAuto : false,
        })
      } else {
        this.setState({
          Allchoose : true,
          chooseCheck : this.state.chooseList.length,
          isAuto : false,
        });
      }
    }
    checkAllChoose(ItemChecked){
      if (this.state.isAuto = true) {
        this.state.isAuto = false;
      }
      ItemChecked ? this.state.chooseCheck++ : this.state.chooseCheck--;
      console.log(this.state.chooseCheck);
      if (this.state.chooseCheck == this.state.chooseList.length) {
        this.setState({
          Allchoose : true,
          isAuto : true
        })
      } else {
        if (this.state.Allchoose == true) {
          this.setState({
            Allchoose : false,
            isAuto : true
          });
        }
      }
    }
    
    render(){
      return (
        <div>
          <span>全选</span>
          <input type="checkbox" value = '全选' onClick = {(e)=>{this.Allchoose(e)}} checked = {this.state.Allchoose} />
          {
            this.state.chooseList.map((item,idx)=>{
              return (
                <div className = "checkbox-group" key = {idx} >
                  <span>{item} </span>
                  <CheckboxItemcomponent value = {item} checkAllChoose = {(ItemChecked)=>{this.checkAllChoose(ItemChecked)}} Allchoose = {this.state.Allchoose} Reverse = {this.state.reverseCheck} isAuto = {this.state.isAuto}/>
                </div>
              )
            })
          }
        </div>
      )
    }
}

class CheckboxItemcomponent extends React.Component{
    constructor(props){
      super(props);
      this.state = {
        checked : false,
      }
    }
    _clickHandle(e){
      this.props.checkAllChoose(!this.state.checked);
      this.setState({
        checked : this.state.checked ? false : true
      });
    }
    componentWillReceiveProps(nextprops){
      console.log(nextprops.isAuto);
      if (nextprops.isAuto == false) {
        this.state.checked = nextprops.Allchoose;
      }
      if (nextprops.Reverse != this.props.Reverse) {
        this.setState({
          checked : !this.state.checked
        })
      }
    }
    render(){
      return (
        <input type="checkbox" value = {this.props.value} checked = {this.props.Allchoose ? this.props.Allchoose : this.state.checked} onClick = {(e)=>{this._clickHandle(e)}} />
      )
    }
}


export default Checkboxcomponent;
