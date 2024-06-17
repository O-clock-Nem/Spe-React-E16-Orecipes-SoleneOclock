/* eslint-disable import/prefer-default-export */
/* eslint-disable arrow-body-style */

import { Recipe } from '../../@types/recipe';

export function findRecipe(
  recipes: Recipe[],
  searchedSlug: string | undefined
) {
  const recipe = recipes.find((testedRecipe) => {
    return testedRecipe.slug === searchedSlug;
  });
  return recipe;
}

/*
TODO
 * installer vitest sur votre repo orecipes
 * creer un fichier recipes.test.ts
 * ecrire des assertions pour tester la fonction findRecipe
 * -> elle a 2 paramètres qu'on va mocker (fausses valeurs)
 * -> écrire tous les cas possibles à tester (choisir la limite)
 */
