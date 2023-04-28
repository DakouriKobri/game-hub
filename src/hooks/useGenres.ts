// NPM Packages
import { useQuery } from '@tanstack/react-query';

// Local
import apiClient, { FetchResponse } from '../services/api-client';
import genres from '../data/genres';

export interface Genre {
  id: number;
  name: string;
  image_background: string;
}

async function fetchGenres() {
  return (await apiClient.get<FetchResponse<Genre>>('/genres')).data;
}

function useGenres() {
  return useQuery({
    queryKey: ['genres'],
    queryFn: fetchGenres,
    staleTime: 24 * 60 * 60 * 1000, // 24 hours
    initialData: { count: genres.length, results: genres },
  });
}

export default useGenres;
