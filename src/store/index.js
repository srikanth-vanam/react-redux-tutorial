import { configureStore, createSlice } from "@reduxjs/toolkit";

const initialCounterState = { counter: 0, isShown: false };
const counterSlice = createSlice({
  name: "counter",
  initialState: initialCounterState,
  reducers: {
    increment(state) {
      state.counter++;
    },
    decrement(state) {
      state.counter--;
    },
    incrementBy5(state, action) {
      state.counter = state.counter + action.payload;
    },
    decrementBy5(state, action) {
      state.counter = state.counter - action.payload;
    },
    toggleHandler(state) {
      state.isShown = !state.isShown;
    },
  },
});

const inintialAuthState = { isAuthenticated: false };
const authSlice = createSlice({
  name: "authentication",
  initialState: inintialAuthState,
  reducers: {
    login(state) {
      state.isAuthenticated = true;
    },
    logout(state) {
      state.isAuthenticated = false;
    },
  },
});
const store = configureStore({
  reducer: { counter: counterSlice.reducer, auth: authSlice.reducer },
});

export const counterActions = counterSlice.actions;
export const Authactions = authSlice.actions;
export default store;
