import { CreateCategoryDto } from './dto/create-category.dto';
import { Param } from '@nestjs/common';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Category, CategoryDocument } from './category.schema';

@Injectable()
export class CategoriesService {
    constructor(@InjectModel(Category.name) private categoryModel: Model<CategoryDocument>) {}

    async findAll(): Promise<Category[]> {
        return this.categoryModel.find().exec();
    }

    async findOne(@Param('name') name: string): Promise<CategoryDocument> {
        // TODO: need only check exist category
        return this.categoryModel.findOne({ name });
    } 

    async create(createCategoryDto: CreateCategoryDto): Promise<Category> {
        const createdCategory = new this.categoryModel(createCategoryDto);

        return createdCategory.save();
    }
}
