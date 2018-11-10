import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';
export default class GalleryGrid extends Component {
  render() {
      var {id,pic,name,price}=this.props
      var src="static/images/"+pic
    return (
        <div>
            <div>
                <NavLink to="/products">
                    <img src={src} className="img-responsive" alt="" />
                </NavLink>
                <div className="gallery-info">
                    <p><span className="glyphicon glyphicon-eye-open" aria-hidden="true"></span> view</p>
                    <NavLink className="shop" to={"/single/"+id+'/homelists'}>SHOP NOW</NavLink>
                    <div className="clearfix"> </div>
                </div>
            </div>
            <div className="galy-info">
                <p>{name}</p>
                <div className="galry">
                    <div className="prices">
                        <h5 className="item_price">${price?price.toFixed(2):0.00}</h5>
                    </div>
                    <div className="rating">
                        <span>☆</span>
                        <span>☆</span>
                        <span>☆</span>
                        <span>☆</span>
                        <span>☆</span>
                    </div>
                    <div className="clearfix"></div>
                </div>
            </div>
        </div>
    );
  }
}
