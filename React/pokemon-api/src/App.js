import "./App.css";
import React, { useState, useEffect } from "react";

function App() {
    const [pokemon, setPokemon] = useState([]);

    useEffect(() => {
        fetch("https://pokeapi.co/api/v2/pokemon?limit=807")
            .then((response) => {
                return response.json();
            })
            .then((response) => {
                return setPokemon(response.results);
            })
            .catch((err) => {
                return console.log(err);
            });
    }, []);

    return (
        <div>
            <ul>
                {pokemon.length > 0 &&
                    pokemon.map((poke, index) => {
                        return <li key={index}>{poke.name}</li>;
                    })}
            </ul>
        </div>
    );
}

export default App;
