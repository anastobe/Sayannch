import { combineReducers } from 'redux'
import { appSettings } from './settings.reducer'
import userReducer from './user.reducer'
import authReducer from './authReducer'

//insert another reducers here to be combined

const reducers = combineReducers({
  userReducer,
  appSettings,
  authReducer
})

export default reducers
