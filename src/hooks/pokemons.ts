"use client";
import { useEffect, useState } from "react";
import { api } from "@/services/api";

const usePokemons = (q: string) => {
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    const fetchPokemons = async () => {
      try {
        const response = await api.get("/pokemon");
        setPokemons(response.data.results);
      } catch (error) {
        console.log(error);
      }
    };

    fetchPokemons();
  }, []);

  return pokemons;
};

export default usePokemons;
