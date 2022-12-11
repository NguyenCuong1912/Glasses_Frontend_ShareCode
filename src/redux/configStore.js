

import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from 'redux-thunk';
import { QuanLyUserReducer } from './Reducers/QuanLyUserReducer';
import { QuanLyCategoryReducer } from './Reducers/QuanLyCategoryReducer';
import { QuanLyProductReducer } from './Reducers/QuanLyProductReducer';
import { QuanLyCartReducer } from './Reducers/QuanLyCartReducer';

const rootReducers = combineReducers({
    QuanLyUserReducer,
    QuanLyCategoryReducer,
    QuanLyProductReducer,
    QuanLyCartReducer
});


export const store = createStore(rootReducers, applyMiddleware(thunk));