import React, { Component } from 'react';
import { Link } from 'react-router';

import logo from './logo.svg';
import './App.css';

class App extends Component {
    
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h1 className="App-title">Welcome to React</h1>
                </header>
                <input type="string" value="id" />
                <input type="password" value="pw" />
                <Link to="/">
                    <button type="submit">submit</button>
                </Link>
            </div>
        );
    }
}

export default App;
