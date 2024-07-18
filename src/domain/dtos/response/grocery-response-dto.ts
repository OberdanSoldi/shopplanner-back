import type { Category } from "../../enums/category";

export interface GroceryResponseDto {
  id: string;
  name: string;
  quantity: number;
  purchased: boolean;
  category: Category;
}
