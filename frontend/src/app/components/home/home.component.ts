import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { CatnavigationComponent } from './catnavigation/catnavigation.component';
import { SidenavigationComponent } from './sidenavigation/sidenavigation.component';
import { CategoryService } from './services/category/category.service';
import { CategoriesStoreItem } from './services/category/categories.storeItem';
import { ProductsComponent } from '../products/products.component';
import { ProductsStoreItem } from './services/product/products.storeItem';
import { ProductsService } from './services/product/products.service';

@Component({
  selector: 'app-home',
  imports: [
    HeaderComponent,
    CatnavigationComponent,
    SidenavigationComponent,
    ProductsComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  providers: [
    CategoryService,
    CategoriesStoreItem,
    ProductsStoreItem,
    ProductsService,
  ],
})
export class HomeComponent {
  constructor(
    private categoriesStore: CategoriesStoreItem,
    private productsStoreItem: ProductsStoreItem
  ) {
    this.categoriesStore.loadCategories();
    this.productsStoreItem.loadProducts();
  }

  onSubCategorySelected(subCategoryId: number): void {
    this.productsStoreItem.loadProducts({ subcategoryid: subCategoryId });
  }

  onSelectCategory(mainCategoryId: number): void {
    this.productsStoreItem.loadProducts({ maincategoryid: mainCategoryId });
  }
}
