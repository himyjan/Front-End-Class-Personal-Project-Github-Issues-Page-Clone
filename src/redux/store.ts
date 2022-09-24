import { cartItemsReducer } from '../reducers/index';

import { configureStore } from '@reduxjs/toolkit';

export const store = configureStore({
  reducer: { cartItemsReducer: cartItemsReducer },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
