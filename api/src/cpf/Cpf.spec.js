const cpf = require('./Cpf');

test('Validar CPF inválido números iguais', () => {
  const result = cpf.validate('111.111.111-11');
  expect(result).toBeFalsy();
});

test('Validar CPF inválido números sequenciais', () => {
  const result = cpf.validate('123.456.789-99');
  expect(result).toBeFalsy();
});

test('Validar CPF valido', () => {
  const result = cpf.validate('935.411.347-80');
  expect(result).toBeTruthy();
});
