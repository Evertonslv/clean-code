import Cpf from '@cpf/Cpf';

test('Deve retornar true se CPF valido A', () => {
  const result = new Cpf('935.411.347-80');
  expect(result).toBeTruthy();
});

test('Deve retornar false se CPF inválido com números iguais', () => {
  expect(() => new Cpf('111.111.111-11')).toThrow(new Error('Invalid CPF'));
});

test('Deve retornar false se CPF inválido com números sequenciais', () => {
  expect(() => new Cpf('123.456.789-99')).toThrow(new Error('Invalid CPF'));
});

test('Deve retornar false se CPF com quantidade menor que o permitido', () => {
  expect(() => new Cpf('123.456')).toThrow(new Error('Invalid CPF'));
});

test('Deve retornar false se CPF com quantidade maior que o permitido', () => {
  expect(() => new Cpf('123.456.789-30000')).toThrow(new Error('Invalid CPF'));
});
