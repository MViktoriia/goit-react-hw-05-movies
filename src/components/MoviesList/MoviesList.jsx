import { Link } from "react-router-dom";
const MoviesList = ({ movies, state }) => {
        
    return (
        <ul>
            {movies.map((movie) => {
                return <li key={movie.id}>
                    <Link to={`/movies/${movie.id}`} state={state} >{movie.title}</Link>
                </li>;
            })}

        </ul>
        
    )
};

export default MoviesList;
