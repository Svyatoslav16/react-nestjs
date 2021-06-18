import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { ProductController } from './products.controller';
import { ProductsService } from './products.service';

import { Product, ProductSchema } from './product.schema';
import { CategoriesModule } from 'src/categories/categories.module';
import { CategoriesService } from 'src/categories/categories.service';
// import { Category, CategorySchema } from 'src/categories/category.schema';

@Module({
    imports: [
        MongooseModule.forFeature([
            { name: Product.name, schema: ProductSchema },
            // { name: Category.name, schema: CategorySchema },
        ]),
        CategoriesModule,
    ],
    controllers: [ProductController],
    providers: [ProductsService,
        // CategoriesService
    ],
})
export class ProductModule {}
