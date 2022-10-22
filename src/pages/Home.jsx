import { useState, useEffect } from "react";
import { getTrendingMovies } from "api/moviesAPI";
import MoviesList from "components/MoviesList/MoviesList";

    
export const Home = () => {
    const [movies, setMovies] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        
        const getMovies = () => {
            setIsLoading(true);

            getTrendingMovies().then(({ data }) => {
                console.log(data.results);
                setMovies(data.results);
            }).catch(newError => {
                setError(newError.message);
            }).finally(setIsLoading(false));
        };

        getMovies();
        
    }, [])

    return (
        <main>
            <h1>Trending today</h1>
            {isLoading && <p>Loading...</p>}
            {error && <p>"Please try again later..."</p>}
            {movies.length > 0 && <MoviesList movies={movies} />}
        </main>

    )
};