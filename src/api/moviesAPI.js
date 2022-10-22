import axios from "axios";

const BASE_URL = 'https://api.themoviedb.org/3/';
const API_KEY = 'e3f9ac8b4c25ea958657e460a35663f5';


const getTrendingMovies = async () => {
    const url = `${BASE_URL}trending/movie/day?api_key=${API_KEY}`;
    const response = await axios.get(url);
    return response;
};

const getMoviesByName = async (query) => {
    const url = `${BASE_URL}search/movie?api_key=${API_KEY}&language=en-US&query=${query}&include_adult=false`;
    const response = await axios.get(url);
    return response;
};

const getMovieDetails = async (id) => {
    const url = `${BASE_URL}movie/${id}?api_key=${API_KEY}&language=en-US`;
    const response = await axios.get(url);
    return response.data;
}

const getMovieCast = async (id) => {
    const url = `${BASE_URL}movie/${id}/credits?api_key=${API_KEY}&language=en-US`;
    const response = await axios.get(url);
    return response.data.cast;
};



export { getTrendingMovies, getMoviesByName, getMovieDetails, getMovieCast };  