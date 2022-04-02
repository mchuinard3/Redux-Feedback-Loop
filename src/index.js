import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';
import logger from 'redux-logger';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';

// ReactDOM.render(<App />, document.getElementById('root'));
// registerServiceWorker();

const feelingReducer = (state = [], action) => {
    if (action.type === 'ADD_FEELING') {
        return action.payload;
    }
    return state;
}

const storeInstance = createStore(
    combineReducers({
        feelingReducer
    }),
    applyMiddleware(logger),
);

ReactDOM.render(<Provider store={storeInstance}><App /></Provider>, document.getElementById('root'));
