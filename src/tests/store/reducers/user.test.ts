// import des outils de vitest
import { describe, test, expect } from 'vitest';

// import du reducer à tester
import userReducer from '../../../store/reducers/user';

describe('user reducer test', () => {
  test('reducer is a function', () => {
    expect(userReducer).toBeTypeOf('function');
  });
});
