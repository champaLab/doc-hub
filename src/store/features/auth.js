import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    username: null,
    role: null,
    isLogged: false,
}

export const auth = createSlice({
    name: "auth",
    initialState,
    reducers: {
        handleSetLogin: (state, { payload }) => {
            state.isLogged = payload.user.isLogged;
            state.role = payload.user.role;
            state.username = payload.user.username;
        },

    }
})

export const { handleSetLogin } = auth.actions
export default auth.reducer