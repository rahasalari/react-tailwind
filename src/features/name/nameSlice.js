import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    nameValue : '',
}

const nameSlice = createSlice({
    name:'user',
    initialState,
    reducers : {
        setName : (state, action) => {
            state.nameValue = action.payload;
        }
    }
});

export const { setName } = nameSlice.actions;
export const selectName = state => state.user.user;
export default nameSlice.reducer;