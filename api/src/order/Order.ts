import Cpf from '@cpf/Cpf';
import Coupon from '@order/Coupon';
import Item from '@order/Item';
import OrderItem from '@order/OrderItem';

export default class Order {
  cpf: Cpf;
  orderItems: OrderItem[];
  coupon: Coupon | undefined;

  constructor(cpf: string) {
    this.cpf = new Cpf(cpf);
    this.orderItems = [];
  }

  addItem(item: Item, quantity: number): void {
    this.orderItems.push(new OrderItem(item.id, item.price, quantity));
  }

  addCoupon(counpon: Coupon): void {
    this.coupon = counpon;
  }

  getTotal(): number {
    let total = 0;
    for (const orderItem of this.orderItems) {
      total += orderItem.getTotal();
    }
    if (this.coupon) {
      total -= (total * this.coupon.percentage) / 100;
    }
    return total;
  }
}
