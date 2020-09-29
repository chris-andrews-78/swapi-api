import React, {Component} from 'react';
import {SwapiContext} from "../context/SwapiAPI";

export default class CharacterCard extends Component {
    static contextType = SwapiContext;
    render(){
      const { isCharacterFound, selectedCharacter } = this.context;
      return (
        <div>
          {(selectedCharacter) ? (
            <div className="sw-app-card">
              {(isCharacterFound) ? (
              <div>
                <div className="sw-app-card__header">
                    <img src={"images/img-avatar-" + selectedCharacter.name + ".png"} alt={selectedCharacter.name} onError={(e)=>{e.target.onerror = null; e.target.src="images/img-avatar-default.png"}} className="sw-app-avatar sw-app-avatard--card" /> 
                    <span>{selectedCharacter.name}</span>
                </div>
                <div className="sw-app-card__body">
                  <div className="sw-app-card__row">
                    <span><strong>Gender</strong></span> <span>{selectedCharacter.gender}</span>
                  </div>
                  <div className="sw-app-card__row">
                    <span><strong>Birth year</strong></span> <span>{selectedCharacter.birth_year}</span>
                  </div>
                  <div className="sw-app-card__row">
                    
                    <span><strong>Height</strong></span> <span>{selectedCharacter.height}</span>
                  </div>
                  <div className="sw-app-card__row">
                    <span><strong>Mass</strong></span> <span>{selectedCharacter.mass}</span>
                  </div>
                  <div className="sw-app-card__row">
                    <span><strong>Hair Colour</strong></span> <span>{selectedCharacter.hair_color}</span>
                  </div>
                </div>
              </div>
              ) : <p>Sorry no character found, please try again</p>}
            </div>
          ) : ""}
        </div>
      );
    }
}