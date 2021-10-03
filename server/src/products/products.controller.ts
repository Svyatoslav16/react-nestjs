import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';

import { Product } from './product.schema';
import { ProductsService } from './products.service';

@Controller('products')
export class ProductController {
    constructor(private readonly productService: ProductsService) {}

    @Get()
    async findAll(): Promise<Product[]> {
        return this.productService.findAll();
    }

    @Post()
    async create(@Body() createProductDto: CreateProductDto) {
        return this.productService.create(createProductDto);
    }
}
