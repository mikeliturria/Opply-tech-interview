import {
  DatabaseItem,
  DatabaseItemType,
  Order,
  Address,
  User,
  TestOutput,
} from './types';
import { unorganisedListOfDatabaseItems } from './mockDb';
import {
  calculateTotalLengthOfFullNames,
  countNumberOfUniqueCities,
  generateFullNames,
  calculateTotalRevenue,
} from './utils';

function getOrganisedDataItems(items: DatabaseItem[]): {
  orders: Order[];
  addresses: Address[];
  users: User[];
} {
  const orders: Order[] = [];
  const addresses: Address[] = [];
  const users: User[] = [];

  for (const databaseItem of items) {
    switch (databaseItem.type) {
      case DatabaseItemType.ORDER:
        orders.push(databaseItem);
        break;
      case DatabaseItemType.ADDRESS:
        addresses.push(databaseItem);
        break;
      case DatabaseItemType.USER:
        users.push(databaseItem);
        break;
    }
  }

  return { orders, addresses, users };
}

export default function main(): TestOutput {
  const { orders, addresses, users } = getOrganisedDataItems(
    unorganisedListOfDatabaseItems,
  );

  const countOfDatabaseItems = unorganisedListOfDatabaseItems.length;
  const totalRevenue = calculateTotalRevenue(orders);
  const countOfUniqueCities = countNumberOfUniqueCities(addresses);
  const totalLengthOfFullNames = calculateTotalLengthOfFullNames(users);
  const allFullNames = generateFullNames(users);

  return {
    countOfDatabaseItems,
    orders,
    totalRevenue,
    addresses,
    countOfUniqueCities,
    users,
    totalLengthOfFullNames,
    allFullNames,
  };
}

if (require.main === module) {
  const result = main();
  console.log(JSON.stringify(result, null, 2));
}
