import { configureStore } from '@reduxjs/toolkit';
import courseReducer from './reducers';

const store = configureStore({
  reducer: {
    courses: courseReducer,
  },
});

export default store;
