import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux'; // Import combineReducers
import dictionary from '../reducers/dictionarySlice';
import history from '../reducers/historySlice';

const rootReducer = combineReducers({
  dictionary: dictionary,
  history: history,
});

const store = configureStore({
  reducer: rootReducer, // Use the combined rootReducer
});

export default store;