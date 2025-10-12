import { computed, Injectable, signal } from '@angular/core';
import { Category } from '../types/category';
import { CategoryService } from './category.service';

// Makes this class available for dependency injection
@Injectable()
export class CategoriesStoreItem {
  // Internal reactive state holding the list of categories
  private readonly _categories = signal<Category[]>([]);

  // Public, read-only access to the category list
  readonly categories = this._categories.asReadonly();

  // Computed value that filters out only top-level categories (those without a parent)
  readonly topLevelCategories = computed(() =>
    this._categories().filter(
      (category) => category.parent_category_id === null
    )
  );

  // Inject the service and load categories when the store is created
  constructor(private categoryService: CategoryService) {
    this.loadCategories();
  }

  // Fetch all categories and update the reactive state
  loadCategories() {
    this.categoryService
      .getAllCategories()
      .subscribe((categories) => this._categories.set(categories));
  }
}