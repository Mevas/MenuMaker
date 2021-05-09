import { Module } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { RestaurantResolver } from './restaurant.resolver';
import { RestaurantService } from './restaurant.service';

@Module({
  imports: [],
  providers: [PrismaService, RestaurantResolver, RestaurantService],
})
export class RestaurantsModule {}