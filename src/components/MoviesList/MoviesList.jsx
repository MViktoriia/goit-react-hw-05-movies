
const MoviesList = (movies) => {
    
    return (
        <ul>
            {movies.map((movie) => {
                return <li key={movie.id}>{movie.original_title}</li>;
            })}

        </ul>
        
    )
};

export default MoviesList;
