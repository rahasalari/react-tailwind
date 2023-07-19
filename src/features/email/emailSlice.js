import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    emailValue : "",
};

const emailSlice = createSlice({
    name:'email',
    initialState,
    reducers : {
        setEmail : (state, action) => {
            state.emailValue = action.payload;
        }
    }
});

export const { setEmail } = emailSlice.actions;
export const selectEmail = state => state.user.user;
export default emailSlice.reducer;