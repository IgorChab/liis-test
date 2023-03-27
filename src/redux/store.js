import {configureStore} from '@reduxjs/toolkit'

import createSagaMiddleware from 'redux-saga'

import authReducer from './slices/authSlice'
import hotelReducer from './slices/hotelSlice'

import apiSaga from './apiSaga'

const sagaMiddleware = createSagaMiddleware()


export const store = configureStore({
    devTools: true,
    middleware: [sagaMiddleware],
    preloadedState: {
        auth: {
            isAuth: localStorage.getItem('isAuth')
        }
    },
    reducer: {
        auth: authReducer,
        hotels: hotelReducer
    }
})

sagaMiddleware.run(apiSaga)