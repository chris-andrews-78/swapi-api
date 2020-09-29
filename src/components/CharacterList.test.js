import React from 'react';
import renderer from 'react-test-renderer';
import CharacterList from './CharacterList';
import SwapiProvider from "../context/SwapiAPI";

test('Test Character List', () => {

    const component = renderer.create(
        <SwapiProvider>  
            <CharacterList />
        </SwapiProvider>
    );

    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();

});