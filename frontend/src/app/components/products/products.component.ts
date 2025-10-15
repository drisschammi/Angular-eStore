import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RatingsComponent } from '../ratings/ratings.component';
import { ProductsService } from '../home/services/product/products.service';
import { ProductsStoreItem } from '../home/services/product/products.storeItem';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faBoxOpen } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-products',
  imports: [CommonModule, RatingsComponent, FontAwesomeModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css',
  providers: [ProductsService],
})
export class ProductsComponent {

  faBoxOpen = faBoxOpen;

  constructor(public productsStoreItem: ProductsStoreItem) {}
  
}
