import { createStore,applyMiddleware } from 'redux';
import rootReducer from '../reducers'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web and AsyncStorage for react-native

import thunk from 'redux-thunk'
import logger from 'redux-logger'
const persistConfig = {
    key: 'root',
    storage,
}


const persistedReducer = persistReducer(persistConfig, rootReducer)

export default () => {
    let store     = createStore(persistedReducer,applyMiddleware(thunk,logger))
    let persistor = persistStore(store)
    return { store, persistor }
  }