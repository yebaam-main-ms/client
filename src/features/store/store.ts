// Desactivación de reglas ESLint específicas para todo el archivo
/* eslint-disable @typescript-eslint/no-unused-vars */

import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { FLUSH, PAUSE, PERSIST, persistReducer, PURGE, REGISTER, REHYDRATE } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { api } from './api'; // Asegúrate de que la importación de 'api' es correcta
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { Reducer } from 'redux';
import { setupListeners } from '@reduxjs/toolkit/query';
import authReducer from '../modules/auth/store/reducers/auth.reducer';
import logoutReducer from '../modules/auth/store/reducers/logout.reducer';

// Configuración del persistor para Redux Persist
const persistConfig = {
  key: 'root',
  storage,
  blacklist: ['clientApi', '_persist']  // Asegúrate de que 'clientApi' es correcto
};

// Combinación de reducers, incluyendo el reducer de api si se usa Redux Toolkit Query
export const rootReducer = combineReducers({
  [api.reducerPath]: api.reducer,
  authUser:authReducer,
  logouth:logoutReducer,


});

// Definición del root reducer con lógica específica, como el reseteo del estado
export const rootReducers: Reducer = (state, action) => {
  // Reinicio del estado al cerrar sesión
  if (action.type === 'logout/logout') {
    state = {}as RootState;
  }
  return rootReducer(state, action);
};

// Persistencia del reducer
const persistedReducer = persistReducer(persistConfig, rootReducers);

// Configuración del store con Redux Toolkit
export const store = configureStore({
  reducer: persistedReducer,
  devTools: true,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
      }
    }).concat(api.middleware)
});

// Setup listeners for RTK Query subscriptions
setupListeners(store.dispatch);

// Tipos para el estado y dispatch del Redux store
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

// Hooks personalizados para useDispatch y useSelector con tipado adecuado
export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
