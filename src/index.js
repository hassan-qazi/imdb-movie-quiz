import React from 'react'
import { render } from 'react-dom'
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux'
import './index.css';
import App from './presentation-components/App'
import movieQuizAppReducer from './reducers'
import {loadState} from './localStorage'
import {loadCsvData} from './actions';

const persistedState = {
  score: loadState('score')
 };

const store = createStore(movieQuizAppReducer, persistedState, applyMiddleware(thunk)); 

window.store = store; //for testing

store.dispatch(loadCsvData());

render(
<Provider store={store}>
<App />
</Provider>,
document.getElementById('root')
);






