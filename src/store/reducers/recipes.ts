import { createReducer } from '@reduxjs/toolkit';
// import data from '../../data'; // données bidons
import { Recipe } from '../../@types/recipe';
import getRecipes from '../thunks/getRecipes';
import getFavRecipes from '../thunks/getFavRecipes';

export interface RecipesState {
  list: Recipe[];
  listFav: Recipe[];
  loading: boolean;
  errorMessage: null | string;
}
export const initialState: RecipesState = {
  list: [], // au debut pas de recettes, on va remplir le tableau après le fetch
  listFav: [], // au debut pas de recettes pref, on va remplir le tableau après le fetch
  loading: true, // au debut pas de recettes donc on veut le loader donc loading à true
  errorMessage: null,
};

const recipesReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(getRecipes.fulfilled, (state, action) => {
      // on ajoute les recettes dans le state
      state.list = action.payload;
      // on passe le loading à false pour afficher les route au lieu du loader
      state.loading = false;
    })
    .addCase(getRecipes.rejected, (state, action) => {
      state.errorMessage = `Erreur lors de la récupération des recettes : ${action.error}`;
      // on passe le loader à false pour ne pas que le user croie qu'on est encore en train de loader les datas alors que y'a eu une error, il les recevra jamais
      state.loading = false;
    })
    .addCase(getFavRecipes.fulfilled, (state, action) => {
      state.listFav = action.payload;
    });
});

export default recipesReducer;
