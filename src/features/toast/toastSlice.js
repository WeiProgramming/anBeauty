import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    isSuccessHidden: true,
    isErrorHidden: true
}

export const toastSlice = createSlice({
    name: 'toast',
    initialState,
    reducers: {
        showSuccess: (state) => {
            state.isHidden = false;
        },
        hideSuccess: (state) => {
            state.isHidden = true;
        },
        showError: (state) => {
            state.isHidden = false;
        },
        hideError: (state) => {
            state.isHidden = true;
        }
    }
})

export const {showSuccess, hideSuccess, showError, hideError} = toastSlice.actions;

export const selectToast = (state) => state.toast;

export default toastSlice.reducer;