import { combineReducers } from 'redux'
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import auth from './auth'

const rootReducer = persistReducer(
  {
    key: 'root', // key is required
    storage, // storage is now required
    whitelist: ['auth']
  },

  combineReducers({ auth })
)

export default rootReducer
