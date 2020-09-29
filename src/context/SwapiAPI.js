import React, { Component } from 'react';
export const SwapiContext = React.createContext({});

export default class SwapiProvider extends Component{
    constructor(props){
        super(props);
        
        this.state = {
            characters: [],
            isCharacterFound: false,
            selectedCharacter: undefined
        }
    }

    //search API for character by name, the results return an array so set the results to state array
    searchCharacters = (name) => {

        const url = "http://swapi.dev/api/people/?search=" + name;

        fetch(url)
        .then(response => response.json())
        .then((data) =>
            {
                this.setState({
                    characters: data.results
                }, function(){
                   this.getCharacter()
                })
            }
        )
        .catch((error) => {
            console.log(error)
        });
    }

    //Get character from API call, only set the selected character if one is returned
    getCharacter = () => {

        if(this.state.characters.length > 0){

            this.setState({
                isCharacterFound: true,
                selectedCharacter: undefined
            })

            if(this.state.characters.length > 1){
                console.log("multi characters found");
            }
            else{
                this.setState({
                    selectedCharacter: this.state.characters[0]
                })
            }
        }
        else{
            this.setState({
                isCharacterFound: false,
                selectedCharacter: {}
            })
        }
    }

    //Set the selected character from external component if needed
    setCharacter = (character) => {
        this.setState({
            isCharacterFound: true,
            selectedCharacter: character
        })
    }

    componentDidMount() {
        //this.searchCharacters('chewbacca'); TEST ON LOAD ONLY
    }

    render(){

        return(
            <SwapiContext.Provider value={{...this.state, searchCharacters: this.searchCharacters, setCharacter: this.setCharacter}}>
                {this.props.children}
            </SwapiContext.Provider>
        )
    }
}