import { useState } from "react";

function SearchBar({onSearch}){
    const [searchTerm, setSearchTerm] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        onSearch(searchTerm)
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="search" name="search" id="searchTerm" placeholder="Enter a search term..." value={searchTerm} onChange={(event) => {setSearchTerm(event.target.value)}}/>
        </form>
    )
}

export default SearchBar;