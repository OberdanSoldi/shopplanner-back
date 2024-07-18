import type { GroceryRequestDto } from "../../domain/dtos/request/grocery-request-dto";
import type { GroceryResponseDto } from "../../domain/dtos/response/grocery-response-dto";
import type { Grocery } from "../../domain/grocery";

class GroceryConverter {
  toResponse(entity: Grocery): GroceryResponseDto {
    return {
      id: entity.id,
      name: entity.name,
      quantity: entity.quantity,
      purchased: entity.purchased,
      category: entity.category,
    };
  }

  toEntity(request: GroceryRequestDto): Grocery {
    return {
      id: "",
      name: request.name,
      quantity: request.quantity,
      purchased: request.purchased,
      category: request.category,
    };
  }
}

export const groceryConverter = new GroceryConverter();
