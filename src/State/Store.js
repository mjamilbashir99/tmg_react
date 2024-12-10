// import { createStore } from 'redux'
import { configureStore } from '@reduxjs/toolkit';
import reducers from './reducers';
import { thunk } from 'redux-thunk';
// import reducers from './reducers'
import { applyMiddleware } from 'redux'
// import { thunk } from 'redux-thunk'

// export const store = configureStore(reducers,{}, applyMiddleware{thunk}) 
export const store = configureStore({
    reducer: reducers,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),
});