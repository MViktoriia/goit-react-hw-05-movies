import { Link } from "react-router-dom";
const MoviesList = ({ movies }) => {
    
    return (
        <ul>
            {movies.map((movie) => {
                return <li key={movie.id}>
                    <Link to="/movies/:id">{movie.title}</Link>
                </li>;
            })}

        </ul>
        
    )
};

export default MoviesList;
