const index = require('./index');

const result = index.getValue();

test('Aplicar desconto', () => {
  expect(result).toEqual(5);
});
