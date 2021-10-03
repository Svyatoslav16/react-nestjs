import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType({ description: 'category' })
export class Category {
  @Field()
  name: string;
}