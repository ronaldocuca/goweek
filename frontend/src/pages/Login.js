import React, { Component } from "react";


import twitterLogo from '../twitter.svg';
import './Login.css';

export default class Login extends Component {

    state = { username: "" };

    handlerSubmit  = (e) => {
        e.preventDefault();

        const {username} = this.state;

        if(!username.length) return;
        localStorage.setItem('@GoTwitter:usernane', username);


        this.props.history.push("/timeline");
    };

    handlerInputChange = (e) => {
        this.setState({username: e.target.value});
    }

    render() {
        return (
            <div className="login-wrapper">
            <img src={twitterLogo} alt="GoTwitter" />
            <form onSubmit={this.handlerSubmit}>
                <input 
                value={this.state.username}
                onChange={this.handlerInputChange}
                placeholder="Nome de usuario" 
                />
                <button type="submit">Entrar</button>
            </form>
            </div>
        )
    }
}