import { createSlice } from "@reduxjs/toolkit";


const homeReducer = createSlice({
    name: 'home',
    initialState: {
        name: 'Home',
        value: 0
    },
    reducers: {
        setHome: (state, action) => {
            state.name = action.payload
        },
    }
});

export const { setHome } = homeReducer.actions;
export default homeReducer.reducer;