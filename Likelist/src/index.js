import React from 'react';
import ReactDOM from 'react-dom';
import {createStore,applyMiddleware} from 'redux'
import rootReducer from './reducers'
import {Provider} from 'react-redux'
import App from './components/App';
import thunk from 'redux-thunk'
import {getAllMovies} from './action'
import './index.css'

const middleware=[thunk]
const store=createStore(rootReducer,applyMiddleware(...middleware))
store.dispatch(getAllMovies())
ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, 
    document.getElementById('root'));

