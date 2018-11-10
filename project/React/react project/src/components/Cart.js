import React, { Component } from 'react';
import { connect } from 'react-redux';
import {calTotal,calCountnum,delCart,modSingle,allCheckChange} from '../actions'
var _ = require('lodash');
class Cart extends Component {
	totalprice() {//计算总价
	    var carts=this.props.carts
		var total=0;
		var quantitys=0
		for(let i=0;i<carts.length;i++){
			if(carts[i].checked){
				total+=carts[i].price*carts[i].quantity
				quantitys+= +carts[i].quantity
			}
		}
		this.props.calTotal(total)
		this.props.calCountnum(quantitys)
	}
	singledel(node){
		var carts=this.props.carts
		var newcarts=[]
		for(var i=0;i<carts.length;i++){
			if(node['0'].dataset.sid==carts[i].id){
				continue;
			}else{
				newcarts.push(carts[i])
			}
		}
		//console.log(newcarts)
		this.props.modSingle(newcarts)
		this.totalprice()
	}
	quantityChange=(e,value)=>{
		var carts=this.props.carts.slice()
		console.log(value)
		for(var i=0;i<carts.length;i++){
			if(carts[i].id==e.target.getAttribute('data-sid')){
				if(value.value){
					carts[i].quantity=value.value
				}else if(value.type==1){
					carts[i].quantity+=1
					if(carts[i].quantity>99){
						carts[i].quantity=99
					}
				}else if(value.type==2){
					carts[i].quantity-=1
					if(carts[i].quantity<1){
						carts[i].quantity=1
					}
				}
				
			}
		}
		
		this.props.modSingle(carts)
		this.totalprice()
	}
	editQuantity=(e)=>{
		//console.log(e.target.getAttribute('data-sid'))
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
		this.quantityChange(e,{value:value})
	}
	increase=(e)=>{
		this.quantityChange(e,{type:1})
	}
	decrease=(e)=>{
		this.quantityChange(e,{type:2})
	}
	allCheckChange=(e)=>{
		// $('.cart-header').find('.check-item').prop('checked', e.target.checked);
		// $('.check-all').prop('checked', e.target.checked);
		console.log(this.props.allcheck)
		
		var carts=this.props.carts.slice()
		if(this.props.allcheck){
			this.props.allCheckChange(false)
			for(var i=0;i<carts.length;i++){
				carts[i].checked=false
			}
		}else{
			this.props.allCheckChange(true)
			for(var i=0;i<carts.length;i++){
				carts[i].checked=true
			}
		}
		
		this.props.modSingle(carts)
		this.totalprice();//求和
	}
	checkItemChange=(e)=>{
		var $inputchecked = $('.check-item');
		var $inputs = $('.check-item:checked'); 
		if ($inputs.length == $inputchecked.size()) {
			this.props.allCheckChange(true)
		} else {
			this.props.allCheckChange(false)
		}

		var carts=this.props.carts.slice()
		for(var i=0;i<carts.length;i++){
			if(carts[i].id==e.target.getAttribute('data-sid')){
				carts[i].checked=!carts[i].checked
			}
		}
		this.props.modSingle(carts)
		this.totalprice();
	}
	render() {
		
		const {carts,total,countnum} = this.props;
		var cartsList = _.uniqWith(carts, _.isEqual)
		var cartOutput = []
		//console.log(this.props)
		//var {total,countnum}=this.totalprice()

		for(let i=0;i<cartsList.length;i++){
			cartOutput.push(
				<div className="cart-header" key={i} data-sid={cartsList[i].id}>
					<div className="close"> </div>
					<div className="cart-checkbox">
						<input type="checkbox" data-sid={cartsList[i].id} className="check-item" onChange={this.checkItemChange} checked={cartsList[i].checked}/>
					</div>
					<div className="cart-sec simpleCart_shelfItem">
						<div className="cart-item cyc">
							<img src={`static/images/${cartsList[i].pic}`} className="img-responsive" alt="" />
						</div>
						<div className="cart-item-info">
							<h3><a href="#"> {cartsList[i].name} </a></h3>
							<ul className="qty">
								<li><p>order value: $<span className="singlePrice">{cartsList[i].price.toFixed(2)}</span></p></li>
								<li><div>num: 
									<div className="item-amount" style={{float:'right'}}>
										<a href="javascript:;" className="reduce" data-sid={cartsList[i].id} onClick={this.decrease}>-</a>
										<input type="text" value={cartsList[i].quantity} className="text-amount" onChange={this.editQuantity} data-sid={cartsList[i].id}/>
										<a href="javascript:;" className="plus" data-sid={cartsList[i].id} onClick={this.increase}>+</a>
									</div>
								</div></li>
							</ul>
							<div className="delivery">
								<p>Service Charges : $10.00</p>
								
								<div className="clearfix"></div>
							</div>
						</div>
						<div className="clearfix"></div>
					</div>
				</div>
			)
		}
		return (
			<div>
				<div className="cart-items">
					<div className="container">
						<h2>My Shopping Cart({cartsList.length})</h2>
						
						{cartOutput}
						
					</div>
				</div>
				<section className="amount">
					<div className="wrap">
						<div className="mini_width clear_fix">
								
							<a href="javascript:void(0)" className="check_status active">
								<label style={{cursor:"pointer"}}><input type="checkbox" className="check-all" checked={this.props.allcheck} onChange={this.allCheckChange} style={{position: 'absolute',top: '29px',left: '-5px'}}/>全选</label>
							</a>
							
							<a href="javascript:void(0)" className="f_left delete_btn" onClick={this.props.delCart}>清空</a>
							<p className="f_left total_count">已选择<b>{countnum}</b>件</p>
							<div className="f_right total_amount_wrap">
								<div className="inner"><p><span>应付(不含运费)：</span>￥<strong>{total.toFixed(2)}</strong></p> </div>
							</div> 
							<button className="order_btn">结算</button>
						</div>
					</div>
				</section>
			</div>
		);
	}
	componentDidMount() {
		var that=this
		$(document).ready(function (c) {
			$('.close').on('click', function (c) {
				that.singledel($(this).parent('.cart-header'))
				//$(this).parent('.cart-header').remove();
			});
			that.totalprice()
		});
		
		//console.log(this.totalprice())
		
	}
}

const mapStateToProps =state=>{
	return {
		carts: state.reducer.carts,
		total: state.reducer.total,
		countnum: state.reducer.countnum,
		allcheck:state.reducer.allcheck
  }
}

const CartsContext = connect(mapStateToProps,{calTotal,calCountnum,delCart,modSingle,allCheckChange})(Cart);
module.exports = CartsContext;