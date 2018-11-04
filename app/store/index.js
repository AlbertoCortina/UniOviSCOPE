import { AsyncStorage } from 'react-native'
import { createStore, applyMiddleware, compose } from 'redux'
import { persistStore, persistReducer } from 'redux-persist'
import thunk from 'redux-thunk'
import rootReducer from '../reducers'
import hardSet from 'redux-persist/lib/stateReconciler/hardSet'

const persistConfig = {
    key: 'root',
    storage: AsyncStorage,
    whitelist:['userData', 'settings','subjects','sessions'],
    blacklist: ['isLoading','errors', 'attendanceCertificate'],
}

const middlewares = [thunk]

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = createStore(
    persistedReducer,
    undefined,
    compose(applyMiddleware(...middlewares))
)

export const persistor = persistStore(store)