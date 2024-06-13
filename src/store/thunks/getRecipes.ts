import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const getRecipes = createAsyncThunk('GET_RECIPES', async () => {
  // dispatch de l'action pending
  const result = await axios.get(
    'https://orecipesapi.onrender.com/api/recipes'
  );
  // dispatch de l'action fulfilled
  // on ajoute à son payload le tableau des recettes
  return result.data;
});

export default getRecipes;
