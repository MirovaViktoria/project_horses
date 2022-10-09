import { authReducer } from './authStore';
import { combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import { horseReducer } from './horseRedux';

const rootReducer = combineReducers({
    horses: horseReducer,
    auth: authReducer,
});

export default configureStore({
    reducer: {
        rootReducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            thunk: {},
        }),
});
