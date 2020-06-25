import React, { useEffect, useState } from 'react';
import { Typography, Link, CircularProgress, Button } from '@material-ui/core';
import { toFirstCharUppercase } from './constants';
import axios from 'axios';

// URL for Pokemon API
const poke_URL = 'https://pokeapi.co/api/v2/pokemon';

// declare a functional component for our Pokemon
const Pokemon = (props) => {
  const { match, history } = props;
  const { params } = match;
  const { pokemonId } = params;
  const [pokemon, setPokemon] = useState(undefined);

  useEffect(() => {
    axios
      .get(`poke_URL/${pokemonId}`)
      .then((resp) => {
        const { data } = resp;
        setPokemon(data);
      })
      .catch((err) => setPokemon(false));
  }, [pokemonId]);
};

export default Pokemon;
