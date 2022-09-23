import React from "react";
import './TodoSearch.css';

function TodoSearch({ query, setQuery }) {

    const handleInputChange = (e) => {
        setQuery(e.target.value);
    };

    return [
        <input
            key="todoSearch"
            className="TodoSearch"
            placeholder="Search for TODOS"
            value={query}
            onChange={handleInputChange}
        />
    ];
}

export { TodoSearch };