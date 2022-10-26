import { getMovieReviews } from "api/moviesAPI";
import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";


export default function Cast() {
    const [reviews, setReviews] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const { id } = useParams();
    console.log(id);

    useEffect(() => {
        const fetchReviews = () => {
            setIsLoading(true);

            getMovieReviews(id)
                .then(({ data }) => {
                    setReviews(data.results);
                    console.log(data.results);
                })
                .catch((newError) => setError(newError))
                .finally(setIsLoading(false));
        };

        fetchReviews();
        
    }, [id]);

    if (!reviews) {
        return
    };
    
    return (
        <>
            {isLoading && <p>Loading...</p>}
            {error && <p>Ops, something whent wrong...</p>}
            <ul>
                {reviews.map(({id, author, content}) => (
                    <li key={id}>
                        <p>{author}</p>
                        <p>{content}</p>
                    </li>))
                }
            </ul>
        </>
        
    )
}