// NPM Packages
import { useQuery } from '@tanstack/react-query';
import ms from 'ms';

// Local Files
import platforms from '../data/platforms';
import APIClient from '../services/api-client';

export interface Platform {
  id: number;
  name: string;
  slug: string;
}

const platformService = new APIClient<Platform>('/platforms/lists/parents');

function usePlatforms() {
  return useQuery({
    queryKey: ['platforms'],
    queryFn: platformService.getAll,
    staleTime: ms('24h'),
    initialData: platforms,
  });
}

export default usePlatforms;
