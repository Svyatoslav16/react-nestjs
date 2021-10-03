import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { GraphQLModule } from '@nestjs/graphql';

import { AppController } from './app.controller';
import { AppService } from './app.service';

import { ProductModule } from './products/products.module';
import { CategoriesModule } from './categories/categories.module';

@Module({
    imports: [
        MongooseModule.forRoot('mongodb://localhost/nest'),
        GraphQLModule.forRoot({
            autoSchemaFile: 'schema.gql',
            sortSchema: true,
        }),
        ProductModule,
        CategoriesModule,
    ],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {}
