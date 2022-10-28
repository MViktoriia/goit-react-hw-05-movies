import { getMovieById } from "api/moviesAPI";
import { useState, useEffect, Suspense } from "react";
import { Outlet, useParams } from "react-router-dom";
import { IMAGES_BASE_URL } from "api/moviesAPI";
import MovieDetails from "components/MovieDetails/MovieDetails";


export default function SingleMoviePage() {
    
    const [movie, setMovie] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const {id} = useParams();
    
    useEffect(() => {
        const fetchMovieDetails = () => {
            setIsLoading(true);

            getMovieById(id)
                .then(({ data }) => {
                    setMovie(data);
                })
                .catch(newError => {
                    setError(newError.message);
                })
                .finally(setIsLoading(false));
        }
        fetchMovieDetails();
    }, [id]);

    return (
        <>
            {isLoading && <p>Loading...</p>}
            {error && <p>Ops, something whent wrong...</p>}

            {movie && <MovieDetails filmId={id} posterUrl={IMAGES_BASE_URL + movie.poster_path} filmTitle={movie.title} score={Math.round(movie.vote_average * 10) + '%'} overview={movie.overview} genres={movie.genres.map(genre => genre.name).toString()} />}
            <Suspense fallback={<div>Loading subpage...</div>}>
                <Outlet />
            </Suspense>            
        </>
    )
}
