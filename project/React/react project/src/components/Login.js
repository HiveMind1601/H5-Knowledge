import React, { Component } from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { destroy } from 'redux-form';
class Login extends Component {
    logout=()=>{
        this.props.destroy()
    }
    render() {
        const {user}=this.props
        console.log(this.props,'111111')
        var IsLogin=function(){
            return;
        };
        if(!(user&&user.submitSucceeded)){
            IsLogin=()=>{
                return(
                    <form id="loginForm">
                        <fieldset id="body">
                            <fieldset>
                                <label >Email Address<input type="text" name="email" id="email" /></label>

                            </fieldset>
                            <fieldset>
                                <label >Password<input type="password" name="password" id="password" /></label>

                            </fieldset>
                            <input type="submit" id="login" defaultValue="Sign in" />
                        </fieldset>
                        <p>New User ? <NavLink className="sign" to="/register">Sign Up</NavLink> <span><a href="javascript:;">Forgot your password?</a></span></p>
                    </form>
                )
            }
        }else{
            IsLogin=()=>{
                return(
                    <div id="loginForm">
                        <p>{`${user.values.firstName} ${user.values.lastName} 欢迎您`}</p>
                        <p><a href="javascript:;">个人信息</a></p>
                        <p><a href="javascript:;" onClick={this.logout}>退出</a></p>
                    </div>
                )
            }
        }
        return (
                <div className="header-right login">
                    <a href="#"><span className="glyphicon glyphicon-user" aria-hidden="true"></span></a>
                    <div id="loginBox">
                        {IsLogin()}
                    </div>
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


const CounterContext = connect(mapStateToProps,{destroy})(Login);

export default CounterContext;