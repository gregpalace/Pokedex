import React from 'react';
import Pokedex from './Pokedex.jsx';
import Pokemon from './Pokemon.jsx';
import { Route, Switch } from 'react-router-dom';

const App = () => (
  <Switch>
    <Route exact path="/" render={(props) => <Pokedex {...props} />} />
    <Route
      exact
      path="/:pokemonId"
      render={(props) => <Pokemon {...props} />}
    />
  </Switch>
);

export default App;
