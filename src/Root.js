import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { Router, Route, browserHistory } from 'react-router';

import App from './components/App';
import Login from './components/Login';

export default class Root extends Component {
    
    render() {
        const { store } = this.props;
        
        return (
            <Provider store={store}>
                <Router history={browserHistory}>
                    <Route path="/" component={App} />
                    <Route path="/login" component={Login} />
                </Router>
            </Provider>
        );
    }
}


module.export = Root;
