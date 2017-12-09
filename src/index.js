import React from 'react';
import ReactDOM from 'react-dom';
import { applyMiddleware, createStore } from 'redux';
import thunkMiddleware from 'redux-thunk';

import reducer from './reducers/index';
import Root from './Root';

const store = createStore(reducer, applyMiddleware(thunkMiddleware));

ReactDOM.render(
    <Root store={store} />,
    document.getElementById('root')
);
