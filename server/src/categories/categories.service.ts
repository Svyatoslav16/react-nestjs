import { Param } from '@nestjs/common';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Category, CategoryDocument } from './category.schema';
import { CreateCategoryDto } from './dto/create-category.dto';

@Injectable()
export class CategoriesService {
    constructor(@InjectModel(Category.name) private categoryModel: Model<CategoryDocument>) {}

    async findAll(): Promise<Category[]> {
        return this.categoryModel.find().exec();
    }

    async findOne(@Param('id') id: number): Promise<CategoryDocument> {
        console.log('call CategoriesService findOne, id: ', id);
        // need only check exist category
        return await this.categoryModel.findOne({ id }, { _id: true });
        // console.log('exist._id: ', exist._id, ' typeof: ', typeof exist._id);
        // if (exist) {
        //     return exist;
        // }
        // return {};
    } 

    async create(createCategoryDto: CreateCategoryDto): Promise<Category> {
        const createdCategory = new this.categoryModel(createCategoryDto);

        return createdCategory.save();
    }
}
