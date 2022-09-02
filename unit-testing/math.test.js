const math = require('./math');

test('adds 1 + 2 to equal 3', () => {
  expect(math.add(1, 2)).toBe(3);
});

test('adds 5 + 7 to equal 12', () => {
    expect(math.add(5, 7)).toBe(12);
});

test('adds 5 + 7 + [10,20] to equal 35', () => {
  expect(math.add(2, 3, [10, 20])).toBe(35);
});

test('Devide 15/3 equal 5', () => {
    expect(math.divide(15, 3)).toBe(5);
});

test('Devide 15/0 equal "Invalid"', () => {
  expect(math.divide(15, 0)).toBe("Invalid");
});