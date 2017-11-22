import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunkMiddleware from 'redux-thunk';
import reducers from './reducers';

const middlewares = [thunkMiddleware];

export const initStore = (initialState = {}) =>
  createStore(reducers, initialState, composeWithDevTools(applyMiddleware(...middlewares)));
