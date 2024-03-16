// tools/store.js
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import rootReducer from './reducers'; // Assuming you have your reducers defined

const store = configureStore({
  reducer: rootReducer,
});

export { store, Provider as ReduxProvider };