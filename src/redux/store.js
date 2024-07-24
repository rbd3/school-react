import { configureStore } from '@reduxjs/toolkit';
import schoolReducer from './movieSlice'

export const store = configureStore({
  reducer: {
    school: schoolReducer,
  },
});

export default store;
