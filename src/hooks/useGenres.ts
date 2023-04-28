// NPM Packages
import { useQuery } from '@tanstack/react-query';

// Local
import apiClient from '../services/api-client';
import { FetchResponse } from './useData';
import genres from '../data/genres';

export interface Genre {
  id: number;
  name: string;
  image_background: string;
}

async function fetchGenres() {
  return (await apiClient.get('/genres')).data;
}

function useGenres() {
  return useQuery<FetchResponse<Genre>>({
    queryKey: ['genres'],
    queryFn: fetchGenres,
    staleTime: 24 * 60 * 60 * 1000, // 24h
    initialData: { count: genres.length, results: genres },
  });
}

export default useGenres;
