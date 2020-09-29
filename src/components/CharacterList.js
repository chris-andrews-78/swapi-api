import React, { useContext } from 'react'
import {SwapiContext} from "../context/SwapiAPI";

const CharacterList = () =>{

    const swapiSearch = useContext(SwapiContext)

    //User can select character from a list if multiple are returned so call context API function to do this
    function handleClick(character) {
        swapiSearch.setCharacter(character);
    }

    return(
        <div>
          {(swapiSearch.characters.length > 1) ? (
            <div className="sw-app-card">
                <p>We found multiple characters with your search, click on the name to display the profile.</p>
                <ul>
                {swapiSearch.characters.map((character) => (
                    <li key={character.url}><a href="#" onClick={() => {handleClick(character)}}>{character.name}</a></li>
                ))}
                </ul>
            </div>
          ) : ""}
        </div>
    )
}

export default CharacterList;