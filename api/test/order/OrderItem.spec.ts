import OrderItem from '@order/OrderItem';

test('Deve criar um item do pedido', () => {
  const orderItem = new OrderItem(1, 1000, 10);
  expect(orderItem.getTotal()).toBe(10000);
});
