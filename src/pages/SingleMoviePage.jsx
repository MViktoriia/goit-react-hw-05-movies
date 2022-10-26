import { getMovieById } from "api/moviesAPI";
import { useState, useEffect } from "react";
import { Outlet, useParams } from "react-router-dom";
import { IMAGES_BASE_URL } from "api/moviesAPI";

import MovieDetails from "components/MovieDetails/MovieDetails";


export default function SingleMoviePage() {
    

    const [state, setState] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const {id} = useParams();
    
    useEffect(() => {
        const fetchMovieDetails = () => {
            setIsLoading(true);

            getMovieById(id)
                .then(({ data }) => {
                    setState(data);
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

            {state && <MovieDetails filmId={id} posterUrl={IMAGES_BASE_URL + state.poster_path} filmTitle={state.title} score={Math.round(state.vote_average * 10) + '%'} overview={state.overview} genres={state.genres.map(genre => genre.name).toString()} />}
            <Outlet/>
        </>
    )
}
