import React from 'react'
import logo from '../logo.svg';

class AcctCreation extends React.Component{
    constructor(props){
        super(props);

    }
    render(){
        return (
            <form id="acct_form">
                <img src={logo} className="App-logo" alt="logo" />
                <br/>

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
                     Create username:
                    <input type='text' 
                            value={this.state.userName} 
                            onChange={this.handleUserName} />
                </label>

                <label>
                    Create password:
                    <input type='password' 
                            value={this.state.firstName} 
                            onChange={this.handlePassword} />
                </label>

                <label>
                    First name:
                    <input type='text' 
                            value={this.state.firstName} 
                            onChange={this.handleFirstName} />
                </label>

                <input id="acct_btn" type='submit' value="Creat Account" />
                <p id="signIn">Already have an account? <a href="#">Sign In!</a></p>

            </form>
        );
    }


}



export default AcctCreation