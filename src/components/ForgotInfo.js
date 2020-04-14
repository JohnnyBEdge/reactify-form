import React from 'react'
import logo from '../logo.svg';
import Home from './Home'

import {
    BrowserRouter as Router,
    Link,

  } from "react-router-dom";

class ForgotInfo extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            email: '',
            answer: ''
        };

        this.handleEmail = this.handleEmail.bind(this);
        this.handleAnswer = this.handleAnswer.bind(this);
    }

    handleEmail = (e) => {
        this.setState({email: e.target.value});
    };
    handleAnswer = (e) => {
        this.setState({answer: e.target.value});
    };
    handleSubmit = (e) => {
        if(
            this.state.email === '' &&
            this.state.answer === ''){
                alert("Please enter your email and security question answer.")
            } else if(this.state.email === ''){
                alert("Please enter your email")
            } else if(this.state.answer === ''){
                alert("Please enter the answer to your security question.")
            } else {
                alert("Please check your email for account information.")
            };
            e.preventDefault();
    };

    render(){
        return(
            <form id="forgot_form" onSubmit = {this.handleSubmit}>
               <img src={logo} className="App-logo" alt="logo" />
                <br/>
               <h1>Forgot User Info</h1> 

               <label>
                    Email:
                    <input type='email' 
                            value={this.state.email} 
                            onChange={this.handleEmail} />
                </label>

                <label>
                    Security question goes here:
                    <br/>
                    <input type='text' 
                            value={this.state.answer} 
                            onChange={this.handleAnswer} />
                </label>

                <input class="submit_btn" type='submit' value="Reset Password" />
                
                <Link to='/'>
                    Return Home
                </Link> 

            </form>
        );
    }


}

  export default ForgotInfo;