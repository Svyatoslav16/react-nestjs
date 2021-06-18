import { IsInt, IsNotEmpty } from 'class-validator';

export class CreateCategoryDto {
    @IsInt()
    id: number;

    @IsNotEmpty()
    name: string;
}