import { MY_RESTAURANTS, MyRestaurantsResult } from '@/gql/restaurant';
import { useQuery } from '@apollo/client';

export const useMyRestaurantList = () => {
  const { data, ...rest } = useQuery<MyRestaurantsResult>(MY_RESTAURANTS, { fetchPolicy: 'cache-and-network' });
  return { restaurants: data?.me.restaurants ?? [], ...rest };
};

export type UseMyRestaurantList = ReturnType<typeof useMyRestaurantList>;
