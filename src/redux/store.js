import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import { cartReducer } from './cartSlice';

const persistConfig = {
  key: 'cart',
  storage,
};

export const store = configureStore({
  reducer: {
    cart: persistReducer(persistConfig, cartReducer),
  },

  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export const persistor = persistStore(store);
