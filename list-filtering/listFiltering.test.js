const filterList = require('./listFiltering');

test('it returns an array', () => {
  expect(Array.isArray(filterList([1, 2]))).toBe(true);
});

test.skip('results do not contain strings', () => {
  expect(filterList()).not.toContain(expect.any(String));
});

test.skip('results contain numbers', () => {
  expect(filterList()).toContain(expect.any(Number));
});

describe('codewar sample tests', () => {

  test('removes strings from array', () => {
    expect(filterList([1, 2,'a','b'])).toStrictEqual([1,2]);
  });

  test('works with 0', () => {
    expect(filterList([1,'a','b',0,15])).toStrictEqual([1,0,15]);
  });

  test('removes number-strings from array', () => {
    expect(filterList([1,2,'aasf','1','123',123])).toStrictEqual([1, 2, 123]);
  });

});