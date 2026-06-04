import GameCard from "./GameCard";

function GameGrid() {
  const games = [
    { title: "GTA V", image: "/assets/gta5.jpg" },
    { title: "COD", image: "/assets/cod.jpg" },
  ];

  return (
    <>
      <h1>Juegos</h1>
      <div style={{ display: "flex", gap: "8px" }}>
        {games.map((game) => (
          <GameCard key={game.title} title={game.title} image={game.image} />
        ))}
      </div>
    </>
  );
}

export default GameGrid;
