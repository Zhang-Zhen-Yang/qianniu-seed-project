/*
 * @Author: Zhang-Zhen-Yang 
 * @Date: 2017-05-26 22:27:08 
 * @Last Modified by: Zhang-Zhen-Yang
 * @Last Modified time: 2017-05-27 00:17:34
 */
import {createStore} from 'redux'
import reducer from './reducer'
const store = createStore(reducer);

export default store;