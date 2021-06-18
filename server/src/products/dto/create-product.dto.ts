import { IsInt, IsNotEmpty } from 'class-validator';

import { Category } from "src/categories/category.schema";

export class CreateProductDto {
    @IsInt()
    id: number;
    @IsNotEmpty()
    name: string;
    @IsInt()
    price: number;
    @IsInt()
    count: number;
    @IsInt()
    category: Category['id'];
    image_path?: string;
}