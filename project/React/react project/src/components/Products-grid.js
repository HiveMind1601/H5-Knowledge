import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import {addToCart} from '../actions'
class ProductsGrid extends Component {
    addCart=(event)=>{
        // const idx = event.currentTarget.getAttribute('data-idx');
        var lists=this.props.lists
        var addToCartProduct=[];
        for(let i=0;i<lists.length;i++){
            if(lists[i].id==this.props.id){
                addToCartProduct = lists[i]
            }
        }
        this.props.addToCart(addToCartProduct); 
    }
    render() {
        //console.log(this.props)
        const {id,pic,name,price,oldprice,discount}=this.props
        var src='static/images/'+pic
        return (
            <div className="product-grid">
                <NavLink to={`/single/${id}/products`}>
                    <div className="more-product"><span> </span></div>
                    <div className="product-img b-link-stripe b-animate-go  thickbox">
                        <img src={src} className="img-responsive" alt="" />
                        <div className="b-wrapper">
                            <h4 className="b-animate b-from-left  b-delay03">
                                <button>View</button>
                            </h4>
                        </div>
                    </div>
                </NavLink>
                <div className="product-info simpleCart_shelfItem">
                    <div className="product-info-cust prt_name">
                        <h4>{name}</h4>
                        <span className="item_price">${price?price.toFixed(2):0}</span>
                        <div className="ofr">
                            <p className="pric1"><del>${oldprice?oldprice.toFixed(2):0}</del></p>
                            <p className="disc">[{discount}% Off]</p>
                        </div>
                        <input type="button" className="item_add items" defaultValue="Add" onClick={(e) => this.addCart(e)}/>
                        <div className="clearfix"> </div>
                    </div>
                </div>
            </div>
        );
    }
    
}

const mapStateToProps =state=>{
    //console.log(state)
	return {
		lists: state.reducer.lists
    }
}


const CounterContext = connect(mapStateToProps,{addToCart})(ProductsGrid);

export default CounterContext;