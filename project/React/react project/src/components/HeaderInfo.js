import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';
import { connect } from 'react-redux';
import Login from './Login'
import HeaderCart from './HeaderCart'
class HeaderInfo extends Component {
    render() {
        console.log(this.props,'++++++++++++++++++')
        const {user}=this.props
        var IsLogin;
        if(user&&user.submitSucceeded){
            IsLogin=()=>{
                return (
                    <div>
                        <Login></Login>
                        <HeaderCart></HeaderCart>
                    </div>
                )
            }
        }else{
            IsLogin=()=>{
                return (
                    <Login></Login>
                )
            }
        }
        return (
            <div className="header-info">
                <div className="header-right search-box">
                    <a href="#"><span className="glyphicon glyphicon-search" aria-hidden="true"></span></a>
                    <div className="search">
                        <form className="navbar-form">
                            <input type="text" className="form-control" />
                            <button type="submit" className="btn btn-default" aria-label="Left Align">
                                Search
                    </button>
                        </form>
                    </div>
                </div>
                {IsLogin()}
                <div className="clearfix"> </div>
            </div>
        );
    }
}


const mapStateToProps =state=>{
    //console.log(state)
	return {
        user:state.form.asyncValidation
    }
}


const CounterContext = connect(mapStateToProps)(HeaderInfo);

export default CounterContext;
