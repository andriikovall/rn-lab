import numberInRange from '../numberInRange';

test('numberInRange works as expected', () => {
  expect(numberInRange(10, 0, 20)).toStrictEqual(true);
  expect(numberInRange(10, 0, 20, true)).toStrictEqual(true);

  expect(numberInRange(10, 10, 20)).toStrictEqual(true);
  expect(numberInRange(10, 10, 20, true)).toStrictEqual(false);

  expect(numberInRange(10, 20, 30)).toStrictEqual(false);
  expect(numberInRange(10, 20, 30, true)).toStrictEqual(false);

  expect(numberInRange(10, 20, 30)).not.toStrictEqual(true);
  expect(numberInRange(10, 20, 30, true)).not.toStrictEqual(true);
});
