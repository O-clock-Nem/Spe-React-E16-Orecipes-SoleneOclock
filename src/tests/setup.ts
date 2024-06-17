/* eslint-disable import/no-extraneous-dependencies */
// on importe des matchers (toBeInTheDom, ....) specifiques au DOM depuis la lib jest-dom
import * as matchers from '@testing-library/jest-dom/matchers';
// on importe la fonction expect de vitest, celle qui nous permet d'ecrire nos assertions
import { expect } from 'vitest';

// dans la fonction expect on veut ajouter les matchers de testing library propres au DOM
// comme toBeInTheDocument
expect.extend(matchers);
