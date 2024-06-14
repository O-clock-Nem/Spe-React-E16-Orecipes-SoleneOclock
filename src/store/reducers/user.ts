import { createAction, createReducer } from '@reduxjs/toolkit';
import checkLogin from '../thunks/checkLogin';

interface UserState {
  logged: boolean;
  pseudo: string;
  error: null | string;
  token: null | string;
}
export const initialState: UserState = {
  logged: false,
  pseudo: '',
  error: null,
  token: null,
};

// action cretors
export const actionLogOut = createAction('LOGOUT');

// reducer
const userReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(checkLogin.fulfilled, (state, action) => {
      // le thunk a réussit sa requete vers /login
      // enregistrer le pseudo et le token dans le state
      state.pseudo = action.payload.pseudo;
      state.token = action.payload.token;
      // passer logged à true
      state.logged = true;
      // virer la potentielle erreur
      state.error = null;
    })
    .addCase(checkLogin.rejected, (state, action) => {
      // enregistrer un message d'erreur dans le state
      state.error = 'Erreur de connexion...';
    })
    .addCase(actionLogOut, (state) => {
      // logged à false, vider pseudo
      state.logged = false;
      state.pseudo = '';
    });
});

export default userReducer;
