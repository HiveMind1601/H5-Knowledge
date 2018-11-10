import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';
export default class Screen extends Component {
  render() {
    return (
        <div className="banner">
            <div className="container">
                <h2 className="hdng">Yummy <span>Cakes</span> for u</h2>
                <p>Our best cakes make your day special</p>
                <NavLink to="/products">SHOP NOW</NavLink>
                <div className="banner-text">			
                    <img src="static/images/2.png" alt=""/>	
                </div>
            </div>
        </div>
    );
  }
}
