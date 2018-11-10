import React, { Component } from 'react';
import { connect } from 'react-redux';
import { HashRouter as  NavLink } from 'react-router-dom';
import {addToCart,fetchList} from '../actions'
class Single extends Component {
    componentWillMount(){
        var url=this.props.match.params.url
        this.props.fetchList({url:url});
    }
    addCart=(event)=>{
        // const idx = event.currentTarget.getAttribute('data-idx');
        var lists=this.props.lists
        var addToCartProduct={};
        for(let i=0;i<lists.length;i++){
            if(lists[i].id==this.props.match.params.id){
                addToCartProduct = Object.assign({},lists[i])
            }
        }
        addToCartProduct['quantity']=$('.input-small').val()
        this.props.addToCart(addToCartProduct); 
    }
    editQuantity=(e)=>{
        var reg = /^\d+$/g; //只能输入数字
	    var value = parseInt(e.target.value);
	    if (reg.test(value)) {
			if (value >= 99) {//限定范围
				value=99
	            $(e.target).val(99);
	        } else if (value <= 0) {
				value=1
	            $(e.target).val(1);
	        } else {
	            $(e.target).val(value);
	        }
	    } else {
			value=1
	        $(e.target).val(1);
		}
    }
    render() {
        const {lists,fetchList} = this.props;
        var nowPro={}
        for(let i=0;i<lists.length;i++){
            if(lists[i].id==this.props.match.params.id){
                nowPro=Object.assign({},lists[i])
            }
        }
        console.log(nowPro,'0000');
        var picsList=[];
        var proPics=(nowPro.pics||"").split(',')
        console.log(nowPro.price,'33333');
        for(let j=0;j<proPics.length;j++){
            picsList.push(
                <li data-thumb={"static/images/"+proPics[j]} key={j}>
                    <div className="thumb-image"> <img src={"static/images/"+proPics[j]} data-imagezoom="true" className="img-responsive" /> </div>
                </li>
            )
        }
        return (
            <div>
                <div className="single">
                    <div className="container">
                        <div className="single-grids">
                            <div className="col-md-4 single-grid">
                                <div className="flexslider">
                                    <ul className="slides">
                                        {picsList}
                                    </ul>
                                </div>
                            </div>
                            <div className="col-md-6 single-grid">
                                <h3>{nowPro.name}</h3>
                                <p>Cake cutting is one of the most wonderful ways of celebrating a special moment. What better way to celebrate than with a rich and mouth watering chocochips cake</p>
                                
                                <div className="galry">
                                    <div className="prices" style={{float:'left'}}>
                                        <h5 className="item_price">${(nowPro.price)?(nowPro.price).toFixed(2):0.00}</h5>
                                    </div>
                                    <div className="clearfix"></div>
                                </div>
                                <p className="qty"> Qty :  </p><input min="1" max="99" type="number" id="quantity" name="quantity" defaultValue="1" className="form-control input-small" onInput={this.editQuantity}/>
                                <div className="btn_form">
                                    <a href="javascript:;" className="add-cart item_add" onClick={this.addCart}>ADD TO CART</a>
                                </div>
                                <div className="tag">
                                    <p>Category : <a href="#"> Cakes</a></p>
                                    <p>Tag : <a href="#"> Lorem ipsum </a></p>
                                </div>
                            </div>
                            <div className="clearfix"> </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
    componentDidMount(){
        $(function() {
            $('.flexslider').flexslider({
              animation: "slide",
              controlNav: "thumbnails"
            });
        });
    }
}

const mapStateToProps =state=>{
	return {
        lists: state.reducer.lists
    }
}


const CounterContext = connect(mapStateToProps,{addToCart,fetchList})(Single);

export default CounterContext;