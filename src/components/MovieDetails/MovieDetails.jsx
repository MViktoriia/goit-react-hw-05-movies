import { useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { FilmInfoWrapper } from "./MovieDetails.styled";

export default function MovieDetails({ filmId, posterUrl, filmTitle, score, overview, genres }) {
    const location = useLocation();
    const previouseLocation = useRef(location.state.from);

    return (
        <div>
            <Link to={previouseLocation.current} >Go back</Link>
            <FilmInfoWrapper>
                <img src={posterUrl} alt="poster" />
                <div>
                    <h1>{filmTitle}</h1>
                    <p>User score: {score} </p>
                    <h2>Overview</h2>
                    <p>{overview}</p>
                    <h3>Genres</h3>
                    <p>{genres}</p>
                </div>
            </FilmInfoWrapper>
            <p>Additional information</p>
            <ul>
                <li><Link to={`/movies/${filmId}/cast`} state={{ from: previouseLocation}} >Cast</Link></li>
                <li><Link to={`/movies/${filmId}/reviews`} state={{ from: previouseLocation}} >Reviews</Link></li>
            </ul>            
        </div>
    )
}
