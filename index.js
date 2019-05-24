/**
 * @format
 */

import { AppRegistry } from 'react-native';
import App from './App';
import { name as appName } from './app.json';
import { createStore, combineReducers, applyMiddleware } from "redux";
import thunkMiddleware from "redux-thunk";
import { get } from "axios";

// const initStore = {
//     count: 1
// }
//
// const counterReducer = function (state = initStore, action) {
//     switch (action.type) {
//         case "COUNT_ADD":
//             return { ...state, count: state.count + 1 }
//         default:
//             return state;
//     }
//     console.log(action)
//     return state;
// }
//
// const otherReducer = function (state = { other: false }, action) {
//     switch (action.type) {
//         case "OTHER":
//             return { ...state, other: !state.other }
//         default:
//             return state;
//     }
//     console.log(action)
//     return state;
// }
//
// const rootReducers = combineReducers({
//     counterReducer,
//     otherReducer
// })
//
// const store = createStore(
//     rootReducers,
//     applyMiddleware(thunkMiddleware)
// )
//
// console.log(store)
// console.log(store.getState())
//
// store.dispatch({
//     type: "COUNT_ADD",
//     preload: {}
// })
//
// console.log(store)
// console.log(store.getState())
//
//
// const getApi = () => {
//     return get('http://jsonplaceholder.typicode.com/posts')
// }
//
// store.dispatch(async function (dispatch) {
//     const res = await getApi();
//     console.log(res.data)
// })

AppRegistry.registerComponent(appName, () => App);
