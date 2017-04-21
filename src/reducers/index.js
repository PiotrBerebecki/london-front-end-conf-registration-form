import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

const contactApp = combineReducers({
  form: formReducer,
});

export default contactApp;
