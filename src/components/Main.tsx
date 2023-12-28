"use client";
// Importações
import { useEffect, useState } from "react";
import { PokemonType } from "@/types/type";
import Search from "./Search";
import usePokemons from "@/hooks/pokemons";
import { useRouter, useSearchParams, usePathname } from "next/navigation";

interface Props {
  searchParams: {
    q: string;
  };
}

const Main = ({ searchParams }: Props) => {
  const { q } = searchParams;
  const { replace } = useRouter();
  const pathname = usePathname();

  const [pokemons, setPokemons] = useState<PokemonType[]>([]);
  const fetchPokemons = usePokemons(q);

  useEffect(() => {
    if (fetchPokemons && fetchPokemons.length > 0) {
      setPokemons(fetchPokemons);
    }
  }, [fetchPokemons]);
  console.log(pokemons)
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    const params = new URLSearchParams();

    if (inputValue.length > 0) {
      params.set("q", inputValue);
      replace(`${pathname}?${params}`);
    } else {
      params.delete("q");
      replace(`${pathname}?${params}`);
    }
  };

  return (
    <>
      <Search onChange={handleSearch} />
      {pokemons.map((pokemon) => (
        <div key={pokemon.name}>{pokemon.name}</div>
      ))}
    </>
  );
};

export default Main;
