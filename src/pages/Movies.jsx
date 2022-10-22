import { getMoviesByName } from "api/moviesAPI";
import { useState, useEffect } from "react";
import SearchForm from "components/SearchForm/SearchForm";
import MoviesList from "components/MoviesList/MoviesList";



export const Movies = () => {
    const [movies, setMovies] = useState([]);
    const [query, setQuery] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const onSubmit = (query) => {
        setMovies([]);
        setQuery(query);
    };

    useEffect(() => {
        if (query === "") {
            return;
        }

        const searchMovies = () => {
            setIsLoading(true);

            getMoviesByName(query)
                .then(({ data }) => { setMovies(data.results) })
                .catch(newError => {
                    setError(newError.message);
                })
                .finally(setIsLoading(false));
        };

        searchMovies();
    }, [query]);
    
    


    return (
        <>
            <SearchForm onSubmit={onSubmit} />
            {isLoading && <p>Loading...</p>}
            {error && <p>Ops...</p>}
            {movies.length > 0 && <MoviesList movies={movies} />}
        </>
        
    )

};