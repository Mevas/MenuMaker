import { GET_RESTAURANTS, GetRestaurantsResult } from '@/gql/restaurant';
import { useQuery } from '@apollo/client';

export const useRestaurantList = () => {
  const { data, ...rest } = useQuery<GetRestaurantsResult>(GET_RESTAURANTS, { fetchPolicy: 'cache-and-network' });
  return { restaurants: data?.restaurants ?? [], ...rest };
};

export type UseRestaurantList = ReturnType<typeof useRestaurantList>;
