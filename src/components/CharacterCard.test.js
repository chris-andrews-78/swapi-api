import React from 'react';
import renderer from 'react-test-renderer';
import CharacterCard from './CharacterCard';
import SwapiProvider from "../context/SwapiAPI";

test('Test Character Card', () => {

    const component = renderer.create(
        <CharacterCard /> //Need to figure out how to pass context to tests
    );

    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();

});