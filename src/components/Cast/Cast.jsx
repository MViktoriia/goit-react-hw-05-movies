import { getMovieCast } from "api/moviesAPI";
import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { IMAGES_BASE_URL } from "api/moviesAPI";


export default function Cast() {
    const [cast, setCast] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const { id } = useParams();

    useEffect(() => {
        const fetchCast = () => {
            setIsLoading(true);

            getMovieCast(id)
                .then(({ data }) => {
                    setCast(data.cast);
                })
                .catch((newError) => setError(newError))
                .finally(setIsLoading(false));
        };

        fetchCast();
        
    }, [id]);

    if (!cast) {
        return
    };
    
    return (
        <>
            {isLoading && <p>Loading...</p>}
            {error && <p>Ops, something whent wrong...</p>}
            {cast.length === 0 ? <p>There is no cast information</p> : <ul>
                {cast.map(({ id, character, name, profile_path }) => {
                    return (
                    <li key={id}>
                        {profile_path === null ? <img src="http://dummyimage.com/100x150" alt="foto" /> : <img src={IMAGES_BASE_URL + profile_path} alt={name} height="150px" />}
                        <p>{name}</p>
                        <p>Character: {character}</p>
                        </li>)
                })
                }
            </ul>}
        </>
        
    )
}
