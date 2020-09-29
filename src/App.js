import React from 'react';
import SwapiProvider from "./context/SwapiAPI";
import './App.css';

//components
import SearchBox from './components/SearchBox';
import CharacterList from './components/CharacterList';
import CharacterCard from './components/CharacterCard';

function App() {
  return (
      <div className="sw-app">
        <header className="sw-app__header"> 
          STAR WARS HEROES
        </header>
        <div className="sw-app__main">
          <SwapiProvider>
            <SearchBox />
            <CharacterList />
            <CharacterCard />
          </SwapiProvider>
        </div>
      </div>
  );
}

export default App;
