import { createSlice } from '@reduxjs/toolkit';

export interface NavState {
    open: boolean;
}

const initialState: NavState = {
    open: false,
};

export const navSlice = createSlice({
    name: 'navSlice',
    initialState,
    reducers: {
        openSidebar: state => {
            state.open = !state.open;
        },
    },
});

export const { openSidebar } = navSlice.actions;
export default navSlice.reducer;
