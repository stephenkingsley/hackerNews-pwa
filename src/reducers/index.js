import { combineReducers } from 'redux';
import comment from './comment';
import story from './story';

const rootReducer = combineReducers({
  comment,
  story,
});

export default rootReducer;
