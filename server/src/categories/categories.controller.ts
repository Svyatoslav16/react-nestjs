import { Body, Get } from '@nestjs/common';
import { Post } from '@nestjs/common';
import { Controller } from '@nestjs/common';
import { CategoriesService } from './categories.service';
import { Category } from './category.schema';
import { CreateCategoryDto } from './dto/create-category.dto';

@Controller('categories')
export class CategoriesController {
    constructor(private readonly categoryService: CategoriesService) {}

    @Get()
    async findAll(): Promise<Category[]> {
        const productList = await this.categoryService.findAll();
        return productList;
    }

    @Post()
    async create(@Body() createCategoryDto: CreateCategoryDto) {
        // TODO: prettie return, return value example:
        // {
        //     "_id": "6159d22a9538222d676d4c34", - It shouldn't be.
        //     "category": "6159ce2911f7b128c314d256",
        //     "name": "Product6",
        //     "price": 123,
        //     "count": 10,
        //     "image_path": "/src/image_path",
        //     "__v": 0 - It shouldn't be.
        // }
        return this.categoryService.create(createCategoryDto);
    }
}
