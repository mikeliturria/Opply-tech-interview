import { Address, User, Order } from './types';

//Given a list of orders, calculates the total revenue by summing
//up the price of each order
export function calculateTotalRevenue(orders: Order[]): number {
  return orders.reduce((revenue, order): number => {
    return revenue + order.price;
  }, 0);
}

//Given a list of addresses, counts the number of unique cities ignoring
//blank spaces
export function countNumberOfUniqueCities(addresses: Address[]): number {
  const uniqueCities = new Set();
  addresses.map((address) => {
    uniqueCities.add(address.city.replace(/\s+/g, ''));
  });
  return uniqueCities.size;
}

//Given a list of users, generates an array of full names
export function generateFullNames(users: User[]): string[] {
  return users.map((user) => {
    return `${user.firstName} ${user.lastName}`;
  });
}

//Given a list of users, calculates the total length of full names
export function calculateTotalLengthOfFullNames(users: User[]): number {
  //Here I would usually reuse the function generateFullNames but the
  //computational cost would be on^2 instead of on, so I prefer to do it this way
  //to only loop the array once
  return users.reduce((totalLength, user) => {
    const fullName = `${user.firstName} ${user.lastName}`;
    return totalLength + fullName.length;
  }, 0);
}
