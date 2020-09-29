import React, { useContext, useState } from 'react'
import {SwapiContext} from "../context/SwapiAPI";

const SearchBox = () =>{

    //Search character using context state and functions
    const swapiSearch = useContext(SwapiContext)
    const [searchText, setSearchText] = useState();

    function handleSubmit(e) {
        swapiSearch.searchCharacters(searchText);
    }

    function handleChange(e) {
        setSearchText(e.target.value);
    }

    return(
        <div className="sw-app-search-box">
            <form onSubmit={
                e => {
                    e.preventDefault(e)
                    handleSubmit(e)
                }
            }>
                <label>Please enter a characters name</label>
                <input type="text" onChange={
                    e => {
                        handleChange(e)
                    }
                } /> 
                <input type="submit" value="Search" className="button" />
            </form>
        </div>
    )
}

export default SearchBox;