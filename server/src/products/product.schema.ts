import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';
import { Category } from '../categories/category.schema';

export type ProductDocument = Product & mongoose.Document;

@Schema()
export class Product {
    @Prop({ required: true })
    id: number;

    @Prop({
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Category',
        required: true,
    })
    category: Category;

    @Prop({ required: true })
    name: string;

    @Prop({ required: true })
    price: number;

    @Prop({ required: true })
    count: number;

    @Prop()
    image_path: string;
}

export const ProductSchema = SchemaFactory.createForClass(Product);