/* ---------- Ayuda!! ----------
*    Slice del Auth
*/
//-Importaciones:
import { createSlice } from "@reduxjs/toolkit";

//-Contenido:
export const authSlice = createSlice({
    name: 'auth',
    initialState: {
        status: 'checking', //'authenticated', 'not-authenticated'
        user: {},
        errorMessage: undefined
    },
    reducers: {
        onChecking: (state) => {
            state.status = 'checking';
            state.user = {};
            state.errorMessage = undefined;
        },
        onLogin: (state, {payload}) => {
            state.status = 'authenticated';
            state.user = payload;
            state.errorMessage = undefined;
        },
        onLogout: (state, {payload}) => {
            state.status = 'not-authenticated';
            state.user = {};
            state.errorMessage = payload;
        },
        clearErrorMessage: (state) => {
            state.errorMessage = undefined;
        },
    },
});
  
//-Exportaciones:
export const { onChecking, onLogin, onLogout,clearErrorMessage} = authSlice.actions;