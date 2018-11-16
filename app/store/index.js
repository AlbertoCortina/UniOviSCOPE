import {AsyncStorage} from 'react-native'
import {applyMiddleware, compose, createStore} from 'redux'
import {persistReducer, persistStore} from 'redux-persist'
import thunk from 'redux-thunk'
import rootReducer from '../reducers'

const persistConfig = {
    key: 'root',
    storage: AsyncStorage,
    whitelist: ['userData', 'settings', 'subjects', 'sessions'],
    blacklist: ['isLoading', 'notifications', 'attendanceCertificate'],
}

const middlewares = [thunk]

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = createStore(
    persistedReducer,
    undefined,
    compose(applyMiddleware(...middlewares))
)

export const persistor = persistStore(store)