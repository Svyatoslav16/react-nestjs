import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CategoriesService } from 'src/categories/categories.service';
// import { CategoryDocument } from 'src/categories/category.schema';
import { CreateProductDto } from './dto/create-product.dto';

import { Product, ProductDocument } from './product.schema';

@Injectable()
export class ProductsService {
    constructor(@InjectModel(Product.name) private productModel: Model<ProductDocument>, private readonly categoriesService: CategoriesService) {}

    async findAll(): Promise<Product[]> {
    // async findAll(): Promise<CategoryDocument> {
        // return await this.categoriesService.findOne(2);
        return this.productModel.find().exec();
    }

    // TODO: Что возвращает Product
    async create(createProductDto: CreateProductDto): Promise<Product | null> {
        let data = null
        // TODO: need call CategoriesService to check exist categories by id 
        const category = await this.categoriesService.findOne(createProductDto.id);
        if (category && category._id) {
            const createdProduct = new this.productModel({
                ...createProductDto,
                id: category._id,
            });
            data = createdProduct.save();
        }
        return data;
    }
}
