import { createAsyncThunk } from '@reduxjs/toolkit';
// on importe notre instance perso préconfiguré plutot que juste axios
import axiosInstance from '../../axios/axios';

const getFavRecipes = createAsyncThunk('GET_FAVRECIPES', async () => {
  // on fait une requete sur un endpoint privé mais normalement on est connecté donc les header contiennent le token
  const result = await axiosInstance.get('/favorites');

  // on a recup le tableau des recettes pref, on le return pour l'ajouter au payload de l'action fulfilled pour que le reducer les place dans le state
  return result.data.favorites;
});

export default getFavRecipes;
