import { Address, User } from './index';

export function countNumberOfUniqueCities(addresses: Address[]): number {
  const cities = addresses.map((address) => {
    return address.city;
  });

  const trimmedCities = cities.map((city) => {
    return city.replace(/\s+/g, '');
  });

  const uniqueCities = new Set(trimmedCities);
  return uniqueCities.size;
}

export function calculateTotalLengthOfFullNames(users: User[]): number {
  // This variable is holds the list of full names so that
  // the total length includes the space between first and last names
  const foos = users.map((user) => {
    return `${user.firstName} ${user.lastName}`;
  });

  return foos.reduce((lengthOfFullNames, foo): number => {
    return lengthOfFullNames + foo.length;
  }, 0);
}
