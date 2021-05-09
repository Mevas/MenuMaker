import { Parent, ResolveField, Resolver } from '@nestjs/graphql';
import { Args, Int, Query } from '@nestjs/graphql';
import { User } from 'src/user/models/user.model';
import { Restaurant } from './models/restaurant.model';
import { RestaurantService } from './restaurant.service';

@Resolver((of) => Restaurant)
export class RestaurantResolver {
  constructor(private restaurantService: RestaurantService) {}

  @Query((returns) => Restaurant)
  async restaurant(@Args('id', { type: () => Int }) id: number) {
    return this.restaurantService.findOne(id);
  }

  @ResolveField('restaurants', () => [Restaurant])
  async restaurants(@Parent() user: User): Promise<Restaurant[]> {
    const { id } = user;
    return this.restaurantService.findByUserId(id);
  }
}