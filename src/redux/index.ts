import {combineReducers, configureStore} from '@reduxjs/toolkit';

import formReducer from './formSlice';

const rootReducer = combineReducers({
  form: formReducer,
});

export default configureStore({reducer: rootReducer});

export type RootState = ReturnType<typeof rootReducer>;
