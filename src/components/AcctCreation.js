import React from 'react'
import logo from '../logo.svg';
import Home from './Home'

import {
    BrowserRouter as Router,
    Link,
  } from "react-router-dom";


class AcctCreation extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            firstname: '',
            lastname: '',
            email: '',
            password1: '',
            password2: ''
        };

        this.handleFirstName = this.handleFirstName.bind(this);
        this.handleLastName = this.handleLastName.bind(this);
        this.handleEmail = this.handleEmail.bind(this);
        this.handlePassword1 = this.handlePassword1.bind(this);
        this.handlePassword2 = this.handlePassword2.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleFirstName = (e) => {
        this.setState({firstname: e.target.value});
    };
    handleLastName = (e) => {
        this.setState({lastname: e.target.value});
    };
    handleEmail = (e) => {
        this.setState({email: e.target.value});
    };
    handlePassword1 = (e) => {
        this.setState({password1: e.target.value});
    };
    handlePassword2 = (e) => {
        this.setState({password2: e.target.value});
    };
    handleSubmit = (e) => {
        if(
            this.state.firstname === '' && 
            this.state.lastname === '' &&
            this.state.password === ''){
                alert("Please fill out the form")
            } else if (
                this.state.firstname === '' 
            ){ 
                alert("Please enter a first name")
            } else {
                alert("Successfully signed up!")
            }
            e.preventDefault();
    }



    render(){
        return (
            <form id="acct_form">
                <img src={logo} className="App-logo" alt="logo" />
                <br/>
                <h1>Create Account</h1>
                <label>
                    First name:
                    <input type='text' 
                            value={this.state.firstName} 
                            onChange={this.handleFirstName} />
                </label>

                <label>
                    Last name:
                    <input type='text' 
                            value={this.state.lastName} 
                            onChange={this.handleLastName} />
                </label>
                <label>
                    Email:
                    <input type='email' 
                            value={this.state.lastName} 
                            onChange={this.handleLastName} />
                </label>

                <label>
                     Create username:
                    <input type='text' 
                            value={this.state.userName} 
                            onChange={this.handleUserName} />
                </label>

                <label>
                    Create password:
                    <input type='password' 
                            value={this.state.password1} 
                            onChange={this.handlePassword1} />
                </label>

                <label>
                    Verify password:
                    <input type='password' 
                            value={this.state.password2} 
                            onChange={this.handlePassword2} />
                </label>

                <input class="submit_btn" type='submit' value="Create Account" />
                <p id="signIn">Already have an account? </p>
                <Link to="./">
                    Sign In!    
                </Link>

            </form>
        );
    }


}



export default AcctCreation