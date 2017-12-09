import React, { PropTypes } from 'react';
import { Provider } from 'react-redux';
import { Router, Route, browserHistory } from 'react-router';
import { createStore, combineReducers } from 'redux'

import App from './App';
import reducer from '../reducers/index'

const store = createStore(reducer)

const Root = ({ store }) => (
    <Provider store={store}>
    <Router history={browserHistory}>
    <Route path="/" component={App} />
    </Router>
    </Provider>
);

Root.propTypes = {
    store: PropTypes.object.isRequired,
};

export default Root;
