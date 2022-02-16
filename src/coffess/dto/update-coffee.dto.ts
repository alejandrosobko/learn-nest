import { PartialType } from "@nestjs/mapped-types";
import { CreateCoffeeDto } from "./create-coffee.dto";

// PartialType marca todos los atributos como optional, y ademas hereda todos los que tiene ese DTO
export class UpdateCoffeeDto extends PartialType(CreateCoffeeDto) {}
