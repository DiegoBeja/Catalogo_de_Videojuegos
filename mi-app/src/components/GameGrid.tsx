import GameCard from "./GameCard";
import { useEffect, useState } from "react";

const apiKey = "ab2ad7cda2c14f3a8ee172f798da405e";

type Game = {
  id: number;
  name: string;
  background_image: string | null;
};

function GameGrid() {
  const [error, setError] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [games, setGames] = useState<Game[]>([]);

  useEffect(() => {
    const fetchGames = async () => {
      setIsLoading(true);

      try {
        const response = await fetch(
          `https://api.rawg.io/api/games?key=${apiKey}`,
        );
        const data = await response.json();
        setGames(data.results ?? []);
      } catch (error: any) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchGames();
  }, []);

  if (isLoading) {
    return (
      <div>
        <h2>Loading...</h2>
      </div>
    );
  }

  if (error) {
    return <div>Todo salio mal</div>;
  }

  return (
    <>
      <h1>Juegos</h1>
      <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
        {games.map((game) => (
          <GameCard
            key={game.id}
            title={game.name}
            image={game.background_image ?? ""}
          />
        ))}
      </div>
    </>
  );
}

export default GameGrid;
