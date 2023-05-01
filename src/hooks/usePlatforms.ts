// NPM Packages
import { useQuery } from '@tanstack/react-query';

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
    staleTime: 24 * 60 * 60 * 1000, // 24 hours
    initialData: platforms,
  });
}

export default usePlatforms;
