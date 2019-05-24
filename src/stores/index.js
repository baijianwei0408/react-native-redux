import rootReducer from '../reducers';
import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from "redux-thunk";
import test from "../middleware/test"; // redux异步请求


const stores = createStore(
    rootReducer,
    applyMiddleware(thunkMiddleware, test)
);

export default stores