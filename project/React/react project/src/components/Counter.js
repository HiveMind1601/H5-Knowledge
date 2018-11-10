import React, { Component } from 'react';
import { connect } from 'react-redux';
import { increase,decrease,fetchList,updateIncrease } from '../actions/index';

class Counter extends Component {
  render() {
    const {
      counter,
      counter1,
      lists,
      increase,
      decrease,
      fetchList
    } = this.props;

    if (lists.length === 0) {
      return <p>数据请求...</p>;
    }
    var output = [];
    for (let i = 0; i < lists.length; i++) {
      output.push(
        <div key={i}>
          <p>title: {lists[i].title}</p>
          <p>title: {lists[i].author}</p>
        </div>
      );
    }

    return (
      <div>
        <h1>counter : {counter}</h1>
        <h1>counter1: {counter1}</h1>
        <p>{output}</p>
        <button onClick={increase}>increase</button>
        <button onClick={decrease}>decrease</button>
      </div>
    );
  }

  componentDidMount() {
    this.props.fetchList();
  }
}

const mapStateToProps = state => {
  return {
    counter : state.counter.counter,
    counter1: state.counter.counter1,
    lists   : state.counter.lists
  };
};

export default connect(
  mapStateToProps,
  { increase, decrease, fetchList }
)(Counter);
