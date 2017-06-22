/*
 * @Author: Zhang-Zhen-Yang 
 * @Date: 2017-05-27 00:16:08 
 * @Last Modified by: Zhang-Zhen-Yang
 * @Last Modified time: 2017-06-22 22:18:24
 */
import { combineReducers } from 'redux';
import counter from './counter';
import loadMoredData from './loadMoreData'

export default combineReducers({
  counter:counter,
  listData:loadMoredData
});