import React, { useState } from "react";
import "./App.css";
import axios from "axios";

const Pokedex = () => {
  const [pokemon, setPokemon] = useState("pikachu");
  const [pokemonData, setPokemonData] = useState([]);
  const [pokemonType, setPokemonType] = useState("");

  const handleChange = (e) => {
    setPokemon(e.target.value.toLowerCase());
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    getPokemon();
  };
  const getPokemon = async () => {
    const toArray = [];
    try {
      const url = `https://pokeapi.co/api/v2/pokemon/${pokemon}`;
      const res = await axios.get(url);
      toArray.push(res.data);
      setPokemonType(res.data.types[0].type.name);
      setPokemonData(toArray);
    } catch (e) {
      console.log(e)
    }
  };

  return (
    <div className="Pokedex"  id="Pokedex">
      <h2>Pokedex</h2>
      <form onSubmit={handleSubmit}>
        <label>
          <input
            type="text"
            onChange={handleChange}
            placeholder="Nombre del Pokemon"
          />
        </label>
      </form>
      {pokemonData.map((data) => {
        return (
          <div >
            <img src={data.sprites["front_default"]} />
            <div>
              <div>
                <div>
                  <div>Tipo:</div>
                  <div >{pokemonType}</div>
                </div>
                <div >
                  <div>Altura</div>
                  <div>
                    {" "}
                    {(data.height / 10)}m
                  </div>
                </div>
                <div>
                  <div>Peso</div>
                  <div className="divTableCell">
                    {" "}
                    {data.weight/10} Kg
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Pokedex;