import { Body, Controller, Get, Post } from '@nestjs/common';
// import { CategoryDocument } from 'src/categories/category.schema';
import { CreateProductDto } from './dto/create-product.dto';

import { Product } from './product.schema';
import { ProductsService } from './products.service';

@Controller('products')
export class ProductController {
    constructor(private readonly productService: ProductsService) {}

    @Get()
    async findAll(): Promise<Product[]> {
    // async findAll(): Promise<CategoryDocument> {
        const productList = await this.productService.findAll();
        return productList;
    }

    @Post()
    async create(@Body() createProductDto: CreateProductDto) {
        console.log('createProductDto: ', createProductDto);
        this.productService.create(createProductDto);

        return 'ok';
    }
}
