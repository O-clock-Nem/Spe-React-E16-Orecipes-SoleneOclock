// importer les fonctions de vitest pour écrire nos tests
import { test, expect, describe } from 'vitest';

// importer la fonction à tester
import { sum, sub } from '../../utils/utils';

describe('sum', () => {
  // on fait un bloc organisationnel avec describe pour les tests de stucture
  // 2 paramètres :
  // - nom du bloc
  // - callback contenant les tests du bloc
  describe('structure tests sum', () => {
    test('sum is a function', () => {
      // si on fait un console.log il apparait dans la console coté server ! car le code des tests n'est pas executé dans un navigateur mais bien dans l'environnement du test runner (nodeJS)
      console.log('coucou je suis le test de sum');

      expect(sum).toBeTypeOf('function');
    });
  });

  describe('execution tests sum', () => {
    // la fonction 'test' de vitest permet de décrire un test, on lui donne en param une description puis une callback qui contient la ou les assertions
    test('sum called with parameters 1 and 2 should return 3', () => {
      // je m'attend à ce que la somme de 1 et 2 soit égale à 3
      expect(sum(1, 2)).toBe(3);
    });

    test('sum called with -1 and -2 should return -3', () => {
      expect(sum(-1, -2)).toBe(-3);
    });
  });
});

describe('sub', () => {
  describe('structure tests sub', () => {
    test('sub is a function', () => {
      expect(sub).toBeTypeOf('function');
    });
  });

  describe('execution tests sub', () => {
    test('sub should return 3 called with 5 and 2', () => {
      expect(sub(5, 2)).toBe(3);
    });
  });
});
