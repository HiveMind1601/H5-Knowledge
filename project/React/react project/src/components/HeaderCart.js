import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import {delCart} from '../actions'
class HeaderCart extends Component {
    render() {
        const {user}=this.props
    
        var carts=this.props.carts
        var total=0;
        var quantitys=0
        for(let i=0;i<carts.length;i++){
            total+= carts[i].price*carts[i].quantity
            quantitys+= +carts[i].quantity
        }
        total=total.toFixed(2)||0.00
        return (
            <div className="header-right cart">
                <a href="#"><span className="glyphicon glyphicon-shopping-cart" aria-hidden="true"></span></a>
                <div className="cart-box">
                    <h4>
                        <NavLink to="/cart"><span > ${total} </span> (<span > {quantitys} </span>)</NavLink>
                    </h4>
                    <p><a href="javascript:;" onClick={this.props.delCart}>Empty cart</a></p>
                    <div className="clearfix"> </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps =state=>{
    //console.log(state)
	return {
        carts: state.reducer.carts,
        user:state.form.asyncValidation
    }
}


const CounterContext = connect(mapStateToProps,{delCart})(HeaderCart);

export default CounterContext;
