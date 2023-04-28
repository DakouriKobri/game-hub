// NPM Packages
import { useQuery } from '@tanstack/react-query';

// Local Files
import apiClient, { FetchResponse } from '../services/api-client';
import platforms from '../data/platforms';

export interface Platform {
  id: number;
  name: string;
  slug: string;
}

async function fetchPlatforms() {
  return (
    await apiClient.get<FetchResponse<Platform>>('/platforms/lists/parents')
  ).data;
}

function usePlatforms() {
  return useQuery({
    queryKey: ['platforms'],
    queryFn: fetchPlatforms,
    staleTime: 24 * 60 * 60 * 1000, // 24 hours
    initialData: { count: platforms.length, results: platforms },
  });
}

export default usePlatforms;
