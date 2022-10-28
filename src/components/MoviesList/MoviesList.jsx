import { Link } from "react-router-dom";
import PropTypes from 'prop-types';


const MoviesList = ({ movies, state }) => {
    
    return (
        <ul>
            {movies.map(({id, title}) => {
                return <li key={id}>
                    <Link to={`/movies/${id}`} state={state} >{title}</Link>
                </li>;
            })}
        </ul>
    )
};

MoviesList.propTypes = {
    movies: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired
    })),
    state: PropTypes.object.isRequired
}

export default MoviesList;
