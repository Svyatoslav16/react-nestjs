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
        console.log('createCategoryDto: ', createCategoryDto);
        this.categoryService.create(createCategoryDto);

        return 'ok';
    }
}
