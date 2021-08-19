import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';

//reducers
import UIReducer from '../features/UI/UISlice';

export const store = configureStore({
  reducer: {
    UI: UIReducer
  }
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>;
