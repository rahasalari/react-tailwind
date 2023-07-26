import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    phoneValue : '',
};

const phoneSlice = createSlice({
    name:'phone',
    initialState,
    reducers : {
        setPhone : (state, action) => {
            state.phoneValue = action.payload;
        }
    }
});

export const { setPhone } = phoneSlice.actions;
export const selectPhone = state => state.user.user;
export default phoneSlice.reducer;