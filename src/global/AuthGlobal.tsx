import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    user: "" || null,
}

 export const globalState = createSlice({
    name: "second",
    initialState,
    reducers: {
        signUserGlobal: (state: any, { payload }: any) => {
            state.user = payload
        },
        logOut: (state: any,) => {
            state.user = null
        },
    }
});

export const { signUserGlobal, logOut } = globalState.actions

export default globalState.reducer