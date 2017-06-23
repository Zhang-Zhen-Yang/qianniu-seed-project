/*
 * @Author: Zhang-Zhen-Yang 
 * @Date: 2017-05-26 22:27:08 
 * @Last Modified by: Zhang-Zhen-Yang
 * @Last Modified time: 2017-06-21 22:27:53
 */
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import reducer from './reducer'
const store = createStore( reducer, applyMiddleware(thunk) );

export default store;