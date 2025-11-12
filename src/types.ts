export enum DatabaseItemType {
  USER = "user",
  ORDER = "order",
  ADDRESS = "address",
}

interface BaseItem {
  id: number;
}

export interface User extends BaseItem {
  type: DatabaseItemType.USER;
  firstName: string;
  lastName: string;
}

export interface Order extends BaseItem {
  type: DatabaseItemType.ORDER;
  price: number;
}

export interface Address extends BaseItem {
  type: DatabaseItemType.ADDRESS;
  city: string;
}

export type DatabaseItem = User | Order | Address;


export interface TestOutput {
  countOfDatabaseItems: number;
  orders: Order[];
  totalRevenue: number;
  addresses: Address[];
  countOfUniqueCities: number;
  users: User[];
  totalLengthOfFullNames: number;
  allFullNames: string[];
};