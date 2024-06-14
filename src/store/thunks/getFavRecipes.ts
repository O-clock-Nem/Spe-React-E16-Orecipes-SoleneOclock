import { createAsyncThunk } from '@reduxjs/toolkit';
// on importe notre instance perso préconfiguré plutot que juste axios
import axiosInstance from '../../axios/axios';
import type { RootState } from '..';

const getFavRecipes = createAsyncThunk(
  'GET_FAVRECIPES',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState() as RootState;

    // dispatch de l'action pending
    const result = await axiosInstance.get('/favorites', {
      // on ajoute dans les headers de la requete le JWT
      headers: {
        Authorization: `Bearer ${state.user.token}`,
      },
    });

    // on a recup le tableau des recettes pref, on le return pour l'ajouter au payload de l'action fulfilled pour que le reducer les place dans le state
    return result.data.favorites;
  }
);

export default getFavRecipes;
