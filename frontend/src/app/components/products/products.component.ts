import { Component } from '@angular/core';
import { Product } from '../home/types/products.type';
import { CommonModule } from '@angular/common';
import { RatingsComponent } from '../ratings/ratings.component';
import { ProductsService } from '../home/services/product/products.service';
import { ProductsStoreItem } from '../home/services/product/products.storeItem';

@Component({
  selector: 'app-products',
  imports: [CommonModule, RatingsComponent],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css',
  providers: [ProductsService],
})
export class ProductsComponent {

  constructor(public productsStoreItem: ProductsStoreItem) {}
  
}
