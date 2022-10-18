import { createSlice } from '@reduxjs/toolkit';

interface CounterState {
  value: number;
}

const initialState: CounterState = {
  value: 0,
};

const CounterSlice = createSlice({
  name: 'Counter',
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decresment: (state) => {
      state.value -= 1;
    },
  },
});

export const { increment, decresment } = CounterSlice.actions;
export default CounterSlice.reducer;
