import React, {Component} from 'react';
// import Documentation from '~/components/documentation';
// import {connect} from 'react-redux';
// import {bindActionCreators} from 'redux';
// import * as homeActions from '../redux/reduces/home';
import Checkboxcomponent from '~/components/check.js';

// @connect(
//   state => ({home: state.home}),
//   dispatch => bindActionCreators(homeActions, dispatch)
// )
class Docs extends Component {
  state = {
  };
  componentWillUnmount() {
    // const {initalLogo} = this.props;
    // initalLogo();
  }
  render() {
    return (
      <React.Fragment>
        1111
         <Checkboxcomponent />
      </React.Fragment>
     
    );
  }
}

export default Docs;
