// NPM Packages
import { useQuery } from '@tanstack/react-query';
import ms from 'ms';

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
    staleTime: ms('24h'),
    initialData: genres,
  });
}

export default useGenres;
