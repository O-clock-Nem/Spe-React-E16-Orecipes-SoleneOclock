import { createReducer } from '@reduxjs/toolkit';

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

const userReducer = createReducer(initialState, () => {});

export default userReducer;
