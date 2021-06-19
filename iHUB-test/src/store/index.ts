import { configureStore, combineReducers} from '@reduxjs/toolkit';
import ReduxThunk from 'redux-thunk';
import dateReducer from './dateSlice'


//basic Redux state
const rootReducer = combineReducers({dateReducer});

export type RootState = ReturnType<typeof rootReducer>;

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(ReduxThunk),
  devTools:true,
});

export type AppDispatch = typeof store.dispatch;

export default store;
