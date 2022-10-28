import { getMoviesByName } from "api/moviesAPI";
import { useState, useEffect } from "react";
import { useLocation, useSearchParams } from "react-router-dom";
import SearchForm from "components/SearchForm/SearchForm";
import MoviesList from "components/MoviesList/MoviesList";

export const Movies = () => {
    const [movies, setMovies] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const [searchParams, setSearchParams] = useSearchParams();
    const query = searchParams.get('query') ?? "";
    const location = useLocation();
    

    const onSubmit = (searchQuery) => {
        if (searchQuery === "") {
            window.alert("Please, enter movie");
            return;
        }
        setSearchParams({ query: searchQuery });
        setMovies([]);
    };

    useEffect(() => {
        
        if (query === "") {
            return;
        };

        const searchMovies = () => {
            setIsLoading(true);
            setError(null);

            getMoviesByName(query)
                .then(({ data }) => {
                    if (data.results.length === 0) {
                        window.alert("We hadn't find any movie, please, try again");
                        return;
                    }
                    setMovies(data.results);
                })
                .catch(newError => {
                    setError(newError.message);
                })
                .finally(setIsLoading(false));
        };

        searchMovies();
    }, [query]);
    
    

    return (
        <main>
            <SearchForm onSubmit={onSubmit} />
            {isLoading && <p>Loading...</p>}
            {error && <p>Something go wrong, try again please</p>}
            {movies.length > 0 && <MoviesList movies={movies} state={{ from: location}} />}
        </main>
        
    )

};