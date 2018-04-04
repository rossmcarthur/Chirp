import merge from 'lodash/merge';
import modals from './session_modals_reducer';
import { combineReducers } from 'redux';

export default combineReducers({ modals, filters });
