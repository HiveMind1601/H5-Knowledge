import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {connect,Provider} from 'react-redux'
import style from './main.css';
import store from './store'
import { increase,decrease,fetchList } from './actions/counter'
/*
1. 必须先有一个store，数据仓库
2. 仓库中必须有货品，而这个货品其实就是一些状态而已 reducer
3. 把reducer放到仓库中去
4. 应该有一个组件，而在这个组件中希望显示仓库中的数据内容 ？
5. 仓库-->组件之间是否能建立起连接
6. mapStateToProps是将状态转成属性，因为状态是不可传递的，而属性传递属于组件化开发最简单的部分
7. 组件与属性之间没有任何的联系，需要将它们进行连接操作，所以可以通过 connect进行连接
8. 当前的组件和store还没有任何的关系，所以需要有一个Provider提供store给组件
*/

class Counter extends Component{
  render(){
    const {counter,counter1,lists,increase,decrease,fetchList} = this.props;

    console.log(lists)

    if(lists.length === 0){
      return <p>数据请求...</p>
    }
    var output = [];
    for(let i =0;i<lists.length;i++){
      output.push(
        <div key={i}>
          <p>title: {lists[i].title}</p>
          <p>title: {lists[i].author}</p>
        </div>
      )
    }

    return (
      <div>
        <h1>counter : {counter}</h1>
        <h1>counter1: {counter1}</h1>
        <p>{output}</p>
        <button onClick={increase}>increase</button>
        <button onClick={decrease}>decrease</button>
      </div>
    )
  }

  componentDidMount(){
    this.props.fetchList();
  }
}

const mapStateToProps = (state)=>{
  return {
    counter : state.counter,
    counter1: state.counter1,
    lists   : state.lists
  }
}

const CounterComponent = connect(mapStateToProps,{increase,decrease,fetchList})(Counter);


ReactDOM.render(
  <Provider store={store}>
    <CounterComponent/>
  </Provider>, document.getElementById('app'));
