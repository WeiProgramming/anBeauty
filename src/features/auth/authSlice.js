import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    isAuthenticated: false,
    userInfo: {}
}

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        isAuthenticated: (state, action) => {
            console.log('in authSlice action passed in ', action)
            if(action.payload) {
                state.isAuthenticated = true;
            } else {
                state.isAuthenticated = false;
            }
            
        }
    }
})

export const {isAuthenticated} = authSlice.actions;

export const selectAuth = (state) => state;

export default authSlice.reducer;