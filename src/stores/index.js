import rootReducer from '../reducers';
import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from "redux-thunk";
import test from "../middleware/test"; // 测试自定义中间件


const stores = createStore(
    rootReducer,
    applyMiddleware(thunkMiddleware, test)
);

export default stores