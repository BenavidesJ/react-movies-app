import { useGetFetchApi } from '../hooks/useFetchApi';
import { INowPlayingResponse, NowPlayingMoviesResult } from '../interfaces/Movies/NowPlaying';

const API_KEY = "af6c4d25df4b6802f46031104fe19fb1";
const BASE_URL = "https://api.themoviedb.org/3/";
const LANG = "en-US";

const NowPlayingMovies = () => {
  const { data } = useGetFetchApi<INowPlayingResponse>(`${BASE_URL}movie/now_playing?api_key=${API_KEY}&language=${LANG}&page=1`);

  return (
    <>
      <h2>Now playing movies</h2>
      <div>
        {
          data && data.results.map((mov: NowPlayingMoviesResult) => (
            <div key={mov.id}>{mov.original_title}</div>
          ))
        }
      </div>
    </>
  )
}

export default NowPlayingMovies;
