import { IsInt, IsNotEmpty } from 'class-validator';

import { Category } from "src/categories/category.schema";

export class CreateProductDto {
    @IsNotEmpty()
    name: string;
    @IsInt()
    price: number;
    @IsInt()
    count: number;
    category: string;
    image_path?: string;
}