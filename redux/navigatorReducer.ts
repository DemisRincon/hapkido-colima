import { createSlice } from "@reduxjs/toolkit";

const navigatorReducer= createSlice({
    name: 'navigator',
    initialState: {
        name: 'Navigator',
        value: 0,
        isMobileNavOpen: false,
    },
    reducers: {
        setNavigator: (state, action) => {
            state.name = action.payload
        },
        setIsMobileNavOpen: (state, action) => {
            state.isMobileNavOpen = action.payload
        }
    }
});

export const { setNavigator } = navigatorReducer.actions;
export default navigatorReducer.reducer