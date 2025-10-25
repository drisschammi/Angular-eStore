import { Component } from '@angular/core';
import { PastOrder, PastOrderProduct } from '../types/order.type';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-past-orders',
  imports: [CommonModule],
  templateUrl: './past-orders.component.html',
  styleUrl: './past-orders.component.css',
})
export class PastOrdersComponent {
  pastOrderProducts: PastOrderProduct[] = [
    {
      amount: 100,
      price: 50,
      productId: 1,
      productImage: 'shop-1.jpg',
      productName: 'Jacket',
      qty: 2,
    },
  ];

  pastOrder: PastOrder = {
    address: 'Address goes here',
    city: 'New Jersey',
    orderDate: '03/01/23',
    pin: '12345',
    state: 'NY',
    total: 100,
    userName: 'Thomas Brown',
  };
}