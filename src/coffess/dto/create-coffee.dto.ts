import { IsString } from "class-validator";

export class CreateCoffeeDto {
    @IsString() // esto agrega validacion en cada request
    readonly name: string;

    @IsString()
    readonly brand: string;

    @IsString({ each: true }) // hace que cada elemento en el array cumpla la validacion
    readonly flavors: string[];
}
