import React from 'react';
import ReactDOM from 'react-dom';
import {createStore,applyMiddleware} from 'redux'
import rootReducer from './reducers'
import {Provider} from 'react-redux'
import App from './containers/App'
import thunk from 'redux-thunk'
import './index.css'

const middleware=[thunk]
const store=createStore(rootReducer,applyMiddleware(...middleware))

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, 
    document.getElementById('root'));

