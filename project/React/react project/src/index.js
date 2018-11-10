import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router, Route, Switch, NavLink } from 'react-router-dom';
import { Provider } from 'react-redux';
import configureStore from './store';

import Home from './components/Home';
import Register from './components/Register';
import Header from './components/Header';
import Footer from './components/Footer';
import Products from './components/Products';
import Single from './components/Single'
import Cart from './components/Cart'

const store = configureStore().store;

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <div>
        <Header/>
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/register" component={Register} />
          <Route path="/products" component={Products}/>
          <Route path="/single/:id/:url" component={Single}/>
          <Route path="/cart" component={Cart}/>
        </Switch>
        <Footer></Footer>
      </div>
    </Router>
  </Provider>,
  document.getElementById('app')
);
