import { configureStore, combineReducers} from '@reduxjs/toolkit';
import ReduxThunk from 'redux-thunk';
import dateReducer from './dateSlice'

//const rootReducer = combineReducers({dateReducer});

export type RootState = ReturnType<typeof dateReducer>;

const store = configureStore({
  reducer: {date:dateReducer },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(ReduxThunk),
  devTools:true,
});

export type AppDispatch = typeof store.dispatch;

export default store;
