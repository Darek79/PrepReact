import { configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import navSlice from './Slices/navSlice';
import { productApi } from 'Redux/Services/queryOneProduct';

export const store = configureStore({
    reducer: {
        navSlice,
        [productApi.reducerPath]: productApi.reducer,
    },
    middleware: getDefaultMiddleware => getDefaultMiddleware().concat(productApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
