import React from "react";
import renderer from 'react-test-renderer';
import App from "./App";

test('App component to match snapshot', async () => {
    const component = renderer.create(<App />).toJSON()
    expect(component).toMatchSnapshot()
})