import { createAction, createReducer } from '@reduxjs/toolkit';

interface UserState {
  logged: boolean;
  credentials: {
    email: string;
    password: string;
  };
}
export const initialState: UserState = {
  logged: false,
  credentials: {
    email: 'chat@mious.fr',
    password: 'mious666',
  },
};

// action cretors
export const actionChangeCredential = createAction<{
  inputName: 'email' | 'password';
  newValue: string;
}>('user/CHANGE_CREDENTIAL');

// reducer
const userReducer = createReducer(initialState, (builder) => {
  builder.addCase(actionChangeCredential, (state, action) => {
    // modifier soit email soit password dans le state
    // et mettre une nouvelle valeur
    // il me faut en payload : le nom du champ à modifier + la nouvelle valeur
    state.credentials[action.payload.inputName] = action.payload.newValue;
  });
});

export default userReducer;
