import { useState } from "react";
import PropTypes from 'prop-types';


export default function SearchForm({ onSubmit }) {
    const [search, setSearch] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        onSubmit(search);
        setSearch("");
    };

    const handleInputChange = (event) => {
        setSearch(event.target.value);
    };

    return ( 
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={search}
                onChange={handleInputChange}    
                autoComplete="off"
                autoFocus
                placeholder="Search movie" />
            <button type="submit">Search</button>
        </form>
    )
};

SearchForm.propTypes = {
    onSubmit: PropTypes.func.isRequired,
};
