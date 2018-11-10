import React, { Component } from 'react';
import { connect } from 'react-redux';

 class About extends Component {
  render() {
    const {counter} = this.props;
    return <div>About <h1>counter: {counter}</h1></div>;
  }
}


const mapStateToProps = state => {
  return {
    counter: state.counter,
  };
};

export default connect(mapStateToProps)(About);