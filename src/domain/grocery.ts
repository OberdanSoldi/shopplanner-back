import type { grocery } from "@prisma/client";
import type { Category } from "./enums/category";

export interface Grocery extends grocery {
  id: string;
  name: string;
  quantity: number;
  purchased: boolean;
  category: Category;
}
