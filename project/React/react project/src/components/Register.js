import React, { Component } from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { Field, reduxForm } from 'redux-form';
var _ = require('lodash');


const validate = values => {
    const errors = {}
    if (!values.firstName) {
        errors.firstName = '不能为空'
    }
    if (!values.lastName) {
        errors.lastName = '不能为空'
    } 
    if (!values.emailAddress) {
    errors.emailAddress = '邮箱不能为空'
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.emailAddress)) {
    errors.emailAddress = '非法邮箱地址'
    } 
    if (!values.password) {
        errors.password = '密码不能为空'
    } 
    if (values.confirmPassword!=values.password) {
        errors.confirmPassword = '密码必须一致'
    } 
    return errors
    
}

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms))

const asyncValidate = (values /*, dispatch */) => {
    var host='http://localhost:3000'
    var user=[]
    fetch(`${host}/user`)
    .then(res=>{
      return res.json()
    })
    .then((data) => {
        for(var i=0;i<data.length;i++){
            user.push(data[i].emailAddress)
        }
    })
  return sleep(1000).then(() => {
    if (user.includes(values.emailAddress)) {
      throw { emailAddress: '该邮箱已被注册' }
    }
  })
}
const renderField = ({ input, label, type,meta: { asyncValidating, touched, error } }) => (
    <div>
      <label>{label}</label>
      <div className={asyncValidating ? 'async-validating' : ''}>
        <input {...input} placeholder={label} type={type}/>
        {touched && error && <span style={{color:'red'}}>{error}</span> }
      </div>
    </div>
)

let ContactForm = props => {
    const { handleSubmit,submitting } = props
    return (
        <form onSubmit={handleSubmit}>
            {<div className="account">
                <div className="container">
                    <div className="register">
                        <div>
                            <div className="register-top-grid">
                                <h3>Personal information</h3>
                                <div className="input">
                                    <Field name="firstName" component={renderField} type="text" label="FirstName"/>
                                </div>
                                <div className="input">
                                    <Field name="lastName" component={renderField} type="text" label="LastName"/>
                                </div>
                                <div className="input">
                                    <Field name="emailAddress" component={renderField} type="text" label="Email"/>
                                </div>
                                <div className="clearfix"> </div>
                            </div>
                            <div className="register-bottom-grid">
                                <h3>Login information</h3>
                                <div className="input">
                                    <Field name="password" component={renderField} type="password" label="Password"/>
                                </div>
                                <div className="input">
                                    <Field name="confirmPassword" component={renderField} type="password" label="ComfirmPassword"/>
                                </div>
                            </div>
                        </div>
                        <div className="clearfix"> </div>
                        <div className="register-but">
                            <div>
                                <input name="submit" type="submit" component={renderField} disabled={submitting} value="Submit"></input>
                                <div className="clearfix"> </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>}
        </form>
    )
}





class Register extends Component {
    submit = (values) => {
        fetch('http://localhost:3000/user', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(values)
        }).then(res=>{
            this.props.history.push('/')
        })
    }
    render() {
        console.log(this.props,'222222')
        return (
            <ContactForm onSubmit={this.submit}></ContactForm>
        );
    }
}



ContactForm = reduxForm({
    // a unique name for the form
    form: 'asyncValidation',
    validate,
    asyncValidate,
    asyncBlurFields: ['emailAddress'],
    destroyOnUnmount: false
})(ContactForm)

const mapStateToProps =state=>{
    //console.log(state)
	return {
		lists: state.reducer.lists
    }
}


const CounterContext = connect(mapStateToProps)(Register);

export default CounterContext;

