/**
 * Created by LarsHenrik on 01.09.2016.
 */
import { combineReducers } from 'redux';
// const Redux = require('redux');
import HelloSayerReducer from "./helloworld/helloworld-reducer";

export default combineReducers({
    helloworld: HelloSayerReducer
})