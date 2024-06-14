import { createAction, createReducer } from '@reduxjs/toolkit';
import checkLogin from '../thunks/checkLogin';

interface UserState {
  logged: boolean;
  credentials: {
    email: string;
    password: string;
  };
  pseudo: string;
  error: null | string;
}
export const initialState: UserState = {
  logged: false,
  credentials: {
    email: 'chat@mious.fr',
    password: 'mious666',
  },
  pseudo: '',
  error: null,
};

// action cretors
export const actionChangeCredential = createAction<{
  inputName: 'email' | 'password';
  newValue: string;
}>('user/CHANGE_CREDENTIAL');

export const actionLogOut = createAction('LOGOUT');
export const actionLogIn = createAction<string>('LOGIN');

// reducer
const userReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(actionChangeCredential, (state, action) => {
      // modifier soit email soit password dans le state
      // et mettre une nouvelle valeur
      // il me faut en payload : le nom du champ à modifier + la nouvelle valeur
      state.credentials[action.payload.inputName] = action.payload.newValue;
    })
    .addCase(checkLogin.fulfilled, (state, action) => {
      // le thunk a réussit sa requete vers /login
      // enregistrer le pseudo dans le state
      state.pseudo = action.payload;
      // passer logged à true
      state.logged = true;
      // virer la potentielle erreur
      state.error = null;
    })
    .addCase(checkLogin.rejected, (state, action) => {
      // enregistrer un message d'erreur dans le state
      state.error = 'Erreur de connexion...';
    })
    .addCase(actionLogIn, (state, action) => {
      // le thunk a réussit sa requete vers /login
      // enregistrer le pseudo dans le state
      state.pseudo = action.payload;
      // passer logged à true
      state.logged = true;
    })
    .addCase(actionLogOut, (state) => {
      // logged à false, vider email, password et pseudo
      state.logged = false;
      state.credentials.email = '';
      state.credentials.password = '';
      state.pseudo = '';
    });
});

export default userReducer;
