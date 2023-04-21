// Local Files
import useData from './useData';
import { Platform } from './useGames';

function usePlatforms() {
  return useData<Platform>('/platforms/lists/parents');
}

export default usePlatforms;
