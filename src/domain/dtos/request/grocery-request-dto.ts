import type { Category } from "../../enums/category";

export interface GroceryRequestDto {
  name: string;
  quantity: number;
  purchased: boolean;
  category: Category;
}
