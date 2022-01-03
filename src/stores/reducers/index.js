import { combineReducers } from 'redux'
import { appSettings } from './settings.reducer'
import userReducer from './user.reducer'
//insert another reducers here to be combined

const reducers = combineReducers({
  userReducer,
  appSettings
})

export default reducers
