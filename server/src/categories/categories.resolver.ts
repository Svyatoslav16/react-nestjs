import { Args, Mutation, Query, Resolver } from "@nestjs/graphql";

import { CategoriesService } from "./categories.service";
import { Category } from "./category.model";
import { NewCategoryInput } from "./inputs/new-categy.input";

@Resolver(() => Category)
export class CategoriesResolver {
  constructor(
    private categoriesService: CategoriesService,
  ) {}

  @Query(() => [Category])
  async categories(): Promise<Category[]> {
    return this.categoriesService.findAll();
  }

  @Mutation(() => Category)
  async createCategory(@Args('newCategoryData') newCategoryData: NewCategoryInput): Promise<Category> {
    return this.categoriesService.create(newCategoryData)
  }
}