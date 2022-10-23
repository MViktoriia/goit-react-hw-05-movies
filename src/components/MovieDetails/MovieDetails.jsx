import { Link, useNavigate } from "react-router-dom";
import { FilmInfoWrapper } from "./MovieDetails.styled";

export default function MovieDetails({ filmId, posterUrl, filmTitle, score, overview, genres }) {
    const navigate = useNavigate();
    const goBack = () => navigate(-1);

    return (
        <div>
            <button onClick={goBack}>Go back</button>
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
                <li><Link to={`/movies/${filmId}/cast`}>Cast</Link></li>
                <li><Link to={`/movies/${filmId}/reviews`}>Reviews</Link></li>
            </ul>            
        </div>
    )
}
