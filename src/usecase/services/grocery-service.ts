import type { GroceryRequestDto } from "../../domain/dtos/request/grocery-request-dto";
import { groceryRepository } from "../../http/repositories/grocery-repository";
import { groceryConverter } from "../converters/grocery-converter";

class GroceryService {
  async create(grocery: GroceryRequestDto) {
    await groceryRepository.create(groceryConverter.toEntity(grocery));
  }

  async findAll() {
    const allGroceries = await groceryRepository.findAll();
    return allGroceries.map((grocery) => groceryConverter.toResponse(grocery));
  }

  async remove(id: string) {
    await groceryRepository.remove(id);
  }

  async update(id: string, grocery: GroceryRequestDto) {
    await groceryRepository.update(id, groceryConverter.toEntity(grocery));
  }
}

export const groceryService = new GroceryService();
