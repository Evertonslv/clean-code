const cpf = require('./Cpf');

test('Deve retornar false se CPF inválido com números iguais', () => {
  const result = cpf.validate('111.111.111-11');
  expect(result).toBeFalsy();
});

test('Deve retornar false se CPF inválido com números sequenciais', () => {
  const result = cpf.validate('123.456.789-99');
  expect(result).toBeFalsy();
});

test('Deve retornar false se CPF null', () => {
  const result = cpf.validate(null);
  expect(result).toBeFalsy();
});

test('Deve retornar false se CPF undefined', () => {
  const result = cpf.validate(undefined);
  expect(result).toBeFalsy();
});

test('Deve retornar false se CPF com quantidade incorreta', () => {
  const result = cpf.validate('123.456');
  expect(result).toBeFalsy();
});

test('Deve retornar true se CPF valido', () => {
  const result = cpf.validate('935.411.347-80');
  expect(result).toBeTruthy();
});
