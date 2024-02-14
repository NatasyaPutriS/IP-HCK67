import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    loading: false,
    userInfo: {}, // for user object
    userToken: null, // for storing the JWT
    error: null,
    success: false // for monitoring the registration process
}

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        LOGIN_SUCCESS(state, action) {
            state.userInfo = action.payload
            state.userToken = "exist"
            state.loading = false
            state.success = true
        }
    }
})

export default authSlice.reducer