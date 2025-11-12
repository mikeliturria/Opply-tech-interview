import {
  countNumberOfUniqueCities,
  calculateTotalLengthOfFullNames,
} from '../src/utils';

describe('countNumberOfUniqueCities', () => {
  test('it considers same city if they have extra spaces in between characters', () => {
    const addresses = [
      { id: 1, city: 'Ha voi' },
      { id: 2, city: 'Havoi' },
    ];
    expect(countNumberOfUniqueCities(addresses)).toBe(1);
  });

  test('it considers different cities if they have different characters other than blank spaces', () => {
    const addresses = [
      { id: 1, city: 'Ha voi' },
      { id: 2, city: 'Ha vois' },
    ];
    expect(countNumberOfUniqueCities(addresses)).toBe(2);
  });
});

describe('calculateTotalLengthOfFullNames', () => {
  test('it considers same city if they have extra spaces in between characters', () => {
    const users = [
      { id: 1, firstName: 'Dja', lastName: 'Vim' },
      { id: 2, firstName: 'No', lastName: 'Mklsdf' },
    ];
    expect(calculateTotalLengthOfFullNames(users)).toBe(16);
  });
});
