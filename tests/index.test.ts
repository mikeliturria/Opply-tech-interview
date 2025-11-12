import main from '../src/index';

describe('main', () => {
  test('returns the final result', () => {
    const testOutput = main();
    expect(testOutput.countOfDatabaseItems).toBe(18);
    expect(testOutput.orders.length).toBe(10);
    expect(testOutput.totalRevenue).toBe(11800);
    expect(testOutput.addresses.length).toBe(5);
    expect(testOutput.countOfUniqueCities).toBe(3);
    expect(testOutput.totalLengthOfFullNames).toBe(24);
    expect(testOutput.allFullNames).toEqual([
      'Av Doi',
      'Uoi Frwn',
      'Ue Uoianlw',
    ]);
  });
});
