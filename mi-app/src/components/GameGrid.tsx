import GameCard from "./GameCard";

type Props = {
  games: { title: string; image: string }[];
};

function GameGrid({ games }: Props) {
  return (
    <>
      <h1>Juegos</h1>
      <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
        {games.map((game) => (
          <GameCard key={game.title} title={game.title} image={game.image} />
        ))}
      </div>
    </>
  );
}

export default GameGrid;
