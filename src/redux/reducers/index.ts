import { combineReducers } from 'redux';
import userReducer from '../slices/userSlice';
import commonReducer from '../slices/commonSlice'

const rootReducer = combineReducers({
  user: userReducer,
  common: commonReducer,
  // Add other reducers here if needed
});

export default rootReducer;