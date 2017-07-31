import { combineReducers } from 'redux';
import * as cocktailReducer from './cocktail';

export default combineReducers(Object.assign(
  cocktailReducer,

));
