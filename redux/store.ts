import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './counterSlice';

const store = configureStore({
  reducer: {
    Counter: counterReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export default store;