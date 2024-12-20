import { configureStore } from '@reduxjs/toolkit';
import logoReducer from './slices/logoSlice';
import menuReducer from './slices/menuSlice';
import dateReducer from './slices/dateSlice';

const store = configureStore({
  reducer: {
    logo: logoReducer,
    menu: menuReducer,
    date: dateReducer,
  },
});

export default store;
