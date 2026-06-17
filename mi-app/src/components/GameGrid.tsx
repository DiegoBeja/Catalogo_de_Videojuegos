import GameCard from "./GameCard";
import { useEffect, useState } from "react";

const apiKey = "ab2ad7cda2c14f3a8ee172f798da405e";

type Game = {
  id: number;
  name: string;
  background_image: string | null;
};

type Props = {
  searchTerm: string;
  selectedGenre: string;
};

function GameGrid({ searchTerm, selectedGenre }: Props) {
  const [error, setError] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [games, setGames] = useState<Game[]>([]);
  const [page, setPage] = useState(1);
  const [hasMorePages, setHasMorePages] = useState(true);

  useEffect(() => {
    const fetchGames = async () => {
      setIsLoading(true);

      try {
        let url = `https://api.rawg.io/api/games?key=${apiKey}&page=${page}&search=${encodeURIComponent(searchTerm)}`;

        if (selectedGenre) {
          url += `&genres=${encodeURIComponent(selectedGenre)}`;
        }

        const response = await fetch(url);

        const data = await response.json();
        if (data.next == null) {
          setHasMorePages(false);
        }
        setGames(data.results ?? []);
      } catch (error: any) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchGames();

    const handleScroll = () => {
      const nearBottom =
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 150;
      if (nearBottom && !isLoading && hasMorePages) {
        setPage((prev) => prev + 1);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [page, searchTerm, selectedGenre]); // ✅ Cuando cambia searchTerm, re-ejecuta el fetch

  return (
    <>
      <h1>Games</h1>
      {isLoading && (
        <div>
          <h2>Loading...</h2>
        </div>
      )}

      {error && <div>Todo salio mal</div>}

      {games.length > 0 && (
        <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
          {games.map((game) => (
            <GameCard
              key={game.id}
              title={game.name}
              image={game.background_image ?? ""}
            />
          ))}
        </div>
      )}
    </>
  );
}

export default GameGrid;
