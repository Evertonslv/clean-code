import Coupon from '@order/Coupon';
import Item from '@order/Item';
import Order from '@order/Order';

test('Deve criar um pedido com CPF valido', () => {
  const cpf = '839.435.452-10';
  const order = new Order(cpf);
  const total = order.getTotal();
  expect(total).toBe(0);
});

test('Deve tentar criar um pedido com CPF invalido', () => {
  const cpf = '111.111.111-11';
  expect(() => new Order(cpf)).toThrow(new Error('Invalid CPF'));
});

test('Deve criar um pedido com 3 item', () => {
  const cpf = '839.435.452-10';
  const order = new Order(cpf);

  order.addItem(new Item(1, 'Música', 'CD', 30), 3);
  order.addItem(new Item(2, 'Vídeo', 'DVD', 50), 1);
  order.addItem(new Item(3, 'Música', 'VHS', 10), 2);

  const total = order.getTotal();
  expect(total).toBe(160);
});

test('Deve criar um pedido com 3 item e com cupom de desconto', () => {
  const cpf = '839.435.452-10';
  const order = new Order(cpf);

  order.addItem(new Item(1, 'Música', 'CD', 30), 3);
  order.addItem(new Item(2, 'Vídeo', 'DVD', 50), 1);
  order.addItem(new Item(3, 'Música', 'VHS', 10), 2);
  order.addCoupon(new Coupon('VALE20', 20));

  const total = order.getTotal();
  expect(total).toBe(128);
});
