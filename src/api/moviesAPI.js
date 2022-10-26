import axios from "axios";

const BASE_URL = 'https://api.themoviedb.org/3/';
const API_KEY = 'e3f9ac8b4c25ea958657e460a35663f5';
const IMAGES_BASE_URL = "https://image.tmdb.org/t/p/w342";



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

const getMovieById = async (id) => {
    const url = `${BASE_URL}movie/${id}?api_key=${API_KEY}&language=en-US`;
    const response = await axios.get(url);
    return response;
};

const getMovieCast = async (id) => {
    const url = `${BASE_URL}movie/${id}/credits?api_key=${API_KEY}&language=en-US`;
    const response = await axios.get(url);
    return response;
};

const getMovieReviews = async (id) => {
    const url = `${BASE_URL}movie/${id}/reviews?api_key=${API_KEY}&language=en-US`;
    const response = await axios.get(url);
    return response;
};



export { getTrendingMovies, getMoviesByName, getMovieById, getMovieCast, getMovieReviews, IMAGES_BASE_URL };  