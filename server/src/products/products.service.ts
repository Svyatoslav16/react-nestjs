import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CategoriesService } from 'src/categories/categories.service';
import { CreateProductDto } from './dto/create-product.dto';

import { Product, ProductDocument } from './product.schema';

@Injectable()
export class ProductsService {
    constructor(@InjectModel(Product.name) private productModel: Model<ProductDocument>, private readonly categoriesService: CategoriesService) {}

    async findAll(): Promise<Product[]> {
        return this.productModel.find().exec();
    }

    async create(createProductDto: CreateProductDto): Promise<ProductDocument> {
        let data: ProductDocument = null;
        const category = await this.categoriesService.findOne(createProductDto.category);
        if (category && category._id) {
            const createdProduct = new this.productModel({
                ...createProductDto,
                category: category._id,
            });
            data = await createdProduct.save();
        }
        return data;
    }
}
