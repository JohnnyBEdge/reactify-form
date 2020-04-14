import React from 'react'
import logo from '../logo.svg';
// import './App.css';

class UserLogin extends React.Component{
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
            <form onSubmit = {this.handleLogin}>
                <img src={logo} className="App-logo" alt="logo" />
                <br/>
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

                <input id="pwd_field" type='submit' value="Log In" />
                <p id="signUp">Don't have an account? <a href="#">Sign up!</a> </p>
                <p id="forgot">Forgot username and/or password? <a href="#">Click Here!</a></p>
            </form>
            
        )
    }
}

export default UserLogin;