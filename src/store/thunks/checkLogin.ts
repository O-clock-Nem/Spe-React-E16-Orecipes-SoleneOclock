import { createAsyncThunk } from '@reduxjs/toolkit';
// importe notre instance de axios avec la base url préconfiguré
import axiosInstance from '../../axios/axios';

const checkLogin = createAsyncThunk(
  'CHECK_LOGIN',
  async (payload: { email: string; password: string }, thunkAPI) => {
    // on recupère les infos email et password dans le payload de l'action
    // les infos credentials ne sont pas dans le state redux, elles sont dans le state local du composant AppHeader
    const result = await axiosInstance.post('/login', {
      email: payload.email,
      password: payload.password,
    });

    console.log(result);
    // on veut enregistrer dans le state le pseudo + le token -> on dispatch (automatiquement) une action fulfilled au reducer et on ajoute le pseudo dans le payload de l'action fulfilled en le retournant
    return {
      pseudo: result.data.pseudo,
      token: result.data.token,
    };
  }
);

export default checkLogin;
