import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

const registrationApp = combineReducers({
  form: formReducer,
});

export default registrationApp;
