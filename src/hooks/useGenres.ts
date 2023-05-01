// NPM Packages
import { useQuery } from '@tanstack/react-query';

// Local
import genres from '../data/genres';
import APIClient from '../services/api-client';

export interface Genre {
  id: number;
  name: string;
  image_background: string;
}

const genreService = new APIClient<Genre>('/genres');

function useGenres() {
  return useQuery({
    queryKey: ['genres'],
    queryFn: genreService.getAll,
    staleTime: 24 * 60 * 60 * 1000, // 24 hours
    initialData: genres,
  });
}

export default useGenres;
