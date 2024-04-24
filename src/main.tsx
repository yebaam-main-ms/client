import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.scss'
import { Persistor, persistStore } from 'redux-persist';
import { store } from './features/store/index.ts';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

const persistor: Persistor = persistStore(store);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>
  </React.StrictMode>
)
