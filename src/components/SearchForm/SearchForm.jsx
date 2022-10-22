import { useState } from "react";


export default function SearchForm({ onSubmit }) {
    const [search, setSearch] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(search);
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
