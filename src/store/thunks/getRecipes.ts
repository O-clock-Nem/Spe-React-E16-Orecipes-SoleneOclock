import { createAsyncThunk } from '@reduxjs/toolkit';
// on importe notre instance perso préconfiguré plutot que juste axios
import axiosInstance from '../../axios/axios';

const getRecipes = createAsyncThunk('GET_RECIPES', async () => {
  // dispatch de l'action pending
  const result = await axiosInstance.get('/recipes');
  // dispatch de l'action fulfilled
  // on ajoute à son payload le tableau des recettes
  return result.data;
});

export default getRecipes;
