import React from 'react'
import logo from '../logo.svg';
import {
    BrowserRouter as Router,
    Link,

  } from "react-router-dom";

class Home extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            username: '',
            password: ''
        };

        this.handleUsername = this.handleUsername.bind(this);
        this.handlePassword = this.handlePassword.bind(this);
        this.handleLogin = this.handleLogin.bind(this);
    }

    handleUsername = (e) => {
        this.setState({username: e.target.value});
    }

    handlePassword(e) {
        this.setState({password: e.target.value});
    }

    handleLogin(e){
        if(this.state.username === '' && this.state.password === ''){
            alert("Please enter a username and password.")
        } else if(this.state.username === ''){
            alert("Please enter a username.")
        } else if(this.state.password === ''){
            alert("Please enter a password.")
        } else {
            alert(this.state.username +' successfully logged in!');
        }
        e.preventDefault();
    }

   

    render(){
        return (
            <form id="home_form" onSubmit = {this.handleLogin}>
                <img src={logo} className="App-logo" alt="logo" />
                <br/>
                <h1>Reactify Forms</h1>
                <label>
                    Username:
                    <input type='text' 
                            value={this.state.username} 
                            onChange={this.handleUsername} />
                </label>
                <br/>
                <label>
                    Password:
                    <input type='password' 
                            value={this.state.password} 
                            onChange={this.handlePassword} />
                </label>
                <br/>

                <input class="submit_btn" type='submit' value="Log In" />

                <p id="signUp">Don't have an account? </p>
                    <Link to='/AcctCreation'>
                        Sign up!
                    </Link>
                <p id="forgot">Forgot username and/or password? </p>
                <Link to="/ForgotInfo">
                    Click Here!
                </Link>
            </form>
            
        )
    }
}

export default Home;