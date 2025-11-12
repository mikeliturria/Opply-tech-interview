import {
  countNumberOfUniqueCities,
  calculateTotalLengthOfFullNames,
  calculateTotalRevenue,
  generateFullNames,
} from '../src/utils';
import { DatabaseItemType, Address, User, Order } from '../src/types';

describe('countNumberOfUniqueCities', () => {
  test('it returns 0 for empty address list', () => {
    const addresses: Address[] = [];
    expect(countNumberOfUniqueCities(addresses)).toBe(0);
  });

  test('it handles single address correctly', () => {
    const addresses: Address[] = [
      { type: DatabaseItemType.ADDRESS, id: 1, city: 'San Sebastian' },
    ];
    expect(countNumberOfUniqueCities(addresses)).toBe(1);
  });
  test('it considers same city if they have extra spaces in between characters', () => {
    const addresses: Address[] = [
      { type: DatabaseItemType.ADDRESS, id: 1, city: 'Ha voi' },
      { type: DatabaseItemType.ADDRESS, id: 2, city: 'Havoi' },
    ];
    expect(countNumberOfUniqueCities(addresses)).toBe(1);
  });

  test('Check multiple spaces in city names in different positions', () => {
    const addresses: Address[] = [
      { type: DatabaseItemType.ADDRESS, id: 1, city: 'San Sebastian' },
      { type: DatabaseItemType.ADDRESS, id: 2, city: 'San Sebastian ' },
      { type: DatabaseItemType.ADDRESS, id: 3, city: 'San   Sebastian' },
    ];
    expect(countNumberOfUniqueCities(addresses)).toBe(1);
  });

  test('it considers different cities if they have different characters other than blank spaces', () => {
    const addresses: Address[] = [
      { type: DatabaseItemType.ADDRESS, id: 1, city: 'Ha voi' },
      { type: DatabaseItemType.ADDRESS, id: 2, city: 'Ha vois' },
    ];
    expect(countNumberOfUniqueCities(addresses)).toBe(2);
  });
});

describe('calculateTotalLengthOfFullNames', () => {
  test('It returns 0 for empty user list', () => {
    const users: User[] = [];
    expect(calculateTotalLengthOfFullNames(users)).toBe(0);
  });

  test('it handles single user correctly', () => {
    const users: User[] = [
      {
        type: DatabaseItemType.USER,
        id: 1,
        firstName: 'Mikel',
        lastName: 'Iturria',
      },
    ];
    // "Mikel Iturria" = 13 characters
    expect(calculateTotalLengthOfFullNames(users)).toBe(13);
  });

  test('it calculates the total length of full names including spaces', () => {
    const users: User[] = [
      { type: DatabaseItemType.USER, id: 1, firstName: 'Dja', lastName: 'Vim' },
      {
        type: DatabaseItemType.USER,
        id: 2,
        firstName: 'No',
        lastName: 'Mklsdf',
      },
    ];
    expect(calculateTotalLengthOfFullNames(users)).toBe(16);
  });
});

describe('calculateTotalRevenue', () => {
  test('If no orders, total revenue is 0', () => {
    const orders: Order[] = [];
    expect(calculateTotalRevenue(orders)).toBe(0);
  });

  test('If one order, total revenue is the price of that order', () => {
    const orders: Order[] = [
      { type: DatabaseItemType.ORDER, id: 1, price: 100 },
    ];
    expect(calculateTotalRevenue(orders)).toBe(100);
  });

  test('Calculates total revenue correctly', () => {
    const orders: Order[] = [
      { type: DatabaseItemType.ORDER, id: 1, price: 100 },
      { type: DatabaseItemType.ORDER, id: 2, price: 200 },
      { type: DatabaseItemType.ORDER, id: 3, price: 300 },
    ];
    expect(calculateTotalRevenue(orders)).toBe(600);
  });

  //Negative prices not considered as per business logic
});

describe('generateFullNames', () => {
  test('Handles empty user list', () => {
    const users: User[] = [];
    expect(generateFullNames(users)).toEqual([]);
  });

  test('Generates full names correctly', () => {
    const users: User[] = [
      {
        type: DatabaseItemType.USER,
        id: 1,
        firstName: 'John',
        lastName: 'Doe',
      },
      {
        type: DatabaseItemType.USER,
        id: 2,
        firstName: 'Jane',
        lastName: 'Smith',
      },
    ];
    expect(generateFullNames(users)).toEqual(['John Doe', 'Jane Smith']);
  });
});
