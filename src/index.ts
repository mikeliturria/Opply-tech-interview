import {
  calculateTotalLengthOfFullNames,
  countNumberOfUniqueCities,
} from './utils';

type DatabaseItem = {
  type: string;
  id: number;
  firstName?: string;
  lastName?: string;
  price?: number;
  city?: string;
};

const unorganisedListOfDatabaseItems: DatabaseItem[] = [
  {
    type: 'user',
    id: 1,
    firstName: 'Av',
    lastName: 'Doi',
  },
  {
    type: 'user',
    id: 2,
    firstName: 'Uoi',
    lastName: 'Frwn',
  },
  {
    type: 'user',
    id: 3,
    firstName: 'Ue',
    lastName: 'Uoianlw',
  },
  {
    type: 'order',
    id: 1,
    price: 1000,
  },
  {
    type: 'order',
    id: 2,
    price: 2000,
  },
  {
    type: 'order',
    id: 3,
    price: 1500,
  },
  {
    type: 'order',
    id: 4,
    price: 1600,
  },
  {
    type: 'order',
    id: 5,
    price: 900,
  },
  {
    type: 'order',
    id: 6,
    price: 900,
  },
  {
    type: 'order',
    id: 7,
    price: 900,
  },
  {
    type: 'order',
    id: 8,
    price: 500,
  },
  {
    type: 'order',
    id: 9,
    price: 1200,
  },
  {
    type: 'order',
    id: 9,
    price: 1300,
  },
  {
    type: 'address',
    id: 10,
    city: 'Wobi',
  },
  {
    type: 'address',
    id: 11,
    city: 'Wobi',
  },
  {
    type: 'address',
    id: 12,
    city: 'Das',
  },
  {
    type: 'address',
    id: 13,
    city: 'Wobi',
  },
  {
    type: 'address',
    id: 14,
    city: 'Ordenon',
  },
];

type Order = {
  id: number;
  price: number;
};

export type Address = {
  id: number;
  city: string;
};

export type User = {
  id: number;
  firstName: string;
  lastName: string;
};

type TestOutput = {
  countOfDatabaseItems: number;
  orders: Order[];
  totalRevenue: number;
  addresses: Address[];
  countOfUniqueCities: number;
  users: User[];
  totalLengthOfFullNames: number;
  allFullNames: string[];
};

export default function main(): TestOutput {
  const testOutput: TestOutput = {
    countOfDatabaseItems: 0,
    orders: [],
    totalRevenue: 0,
    addresses: [],
    countOfUniqueCities: 0,
    users: [],
    totalLengthOfFullNames: 0,
    allFullNames: [],
  };

  testOutput.countOfDatabaseItems = unorganisedListOfDatabaseItems.length;

  for (const databaseItem of unorganisedListOfDatabaseItems) {
    if (databaseItem.type === 'order') {
      testOutput.orders.push(databaseItem as Order);
    }

    if (databaseItem.type === 'address') {
      if (databaseItem.city != null) {
        testOutput.addresses.push({
          id: databaseItem.id,
          city: databaseItem.city,
        });
      }
    }

    if (databaseItem.type === 'user') {
      testOutput.users.push(databaseItem as User);
    }
  }

  testOutput.totalRevenue = testOutput.orders.reduce(
    (revenue, order): number => {
      return revenue + order.price;
    },
    0,
  );

  testOutput.countOfUniqueCities = countNumberOfUniqueCities(
    testOutput.addresses,
  );

  testOutput.totalLengthOfFullNames = calculateTotalLengthOfFullNames(
    testOutput.users,
  );

  testOutput.allFullNames = testOutput.users.map((user) => {
    return user.firstName + ' ' + user.lastName;
  });

  return testOutput;
}

main();
