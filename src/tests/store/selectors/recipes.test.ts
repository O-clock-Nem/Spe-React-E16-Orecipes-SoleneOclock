// import des outils de vitest
import { describe, test, expect } from 'vitest';

// importer la fonction à tester
import { findRecipe, getTitle } from '../../../store/selectors/recipes';
import { Recipe } from '../../../@types/recipe';
import data from '../../../data';

// tests à faire
// - findRecipe existe
// - findRecipe est une fonction
// - findRecipe renvoie un objet recette si le slug existe dans le tableau
// - si le slug n'existe pas alors renvoie undefined
// - on pourrait aussi tester le type des paramètres et si ils existent mais là comme on est en TS normalement le cas n'arrivera jamais car on peut pas build le code pour la prod si il reste des erreurs TS

describe('tests structure', () => {
  test('findRecipe exist', () => {
    expect(findRecipe).toBeDefined();
  });
  test('findRecipe is a function', () => {
    expect(findRecipe).toBeTypeOf('function');
  });
});

describe('tests execution', () => {
  test('findRecipe called with and empty recipe array and a slug return undefined', () => {
    // on prépare des paramètres pour notre fonction
    const fakeEmptyRecipeArray: Recipe[] = [];
    const fakeSlug = 'nems au poulet';

    expect(findRecipe(fakeEmptyRecipeArray, fakeSlug)).toBeUndefined();
  });

  test('findRecipe called with an array of recipes and a slug corresponding to one recipe of the array should return the recipe object', () => {
    // on prépare des paramètres pour notre fonction
    const recipeArray: Recipe[] = data;
    const slug = 'crepes-raffinees';

    // toBe regarde si l'objet est exactement celui fournit en param (comporaison de surface)
    // toEqual regarde si l'objet contient exactement les memes propriétés/valeurs meme si c'est pas la même ref
    expect(findRecipe(recipeArray, slug)).toBe(data[0]);
  });

  test('findRecipe called with a slug not corresponding to any recipe of the array should reurn undefined', () => {
    expect(findRecipe(data, 'nems-aux-crevettes')).toBe(undefined);
  });
});

describe('getTitle', () => {
  test('getTitle should be a function', () => {
    expect(getTitle).toBeTypeOf('function');
  });

  test('getTitle should return a string title', () => {
    expect(getTitle()).toBeTypeOf('string');
  });

  test('getTitle should return specific title "Voici nos 2 recettes" if state contains exctly 2 recipes', () => {
    // data c'est nos données tests du fichie data.js y'a 2 recettes dedans
    expect(getTitle(data)).toBe('Voici nos 2 recettes');
  });

  test('getTitle should return specific title "Voici nos 4 recettes" if state contains exctly 4 recipes', () => {
    // data c'est nos données tests du fichie data.js y'a 2 recettes dedans, on créé un tableau et on deverse 2 fois data donc on a 4 recettes
    expect(getTitle([...data, ...data])).toBe('Voici nos 4 recettes');
  });

  test('getTitle should return specific title "Voici notre recette" if state contains exctly 1 recipes', () => {
    expect(getTitle([data[1]])).toBe('Voici notre recette');
  });

  test('getTitle should return specific title "Pas de recette" if state contains an empty array', () => {
    expect(getTitle([])).toBe('Pas de recette');
  });
});
