import { useEffect, useState } from "react";
import { getItem, setItem } from "../Utils/localstorage";

type Props = {
  id: number;
  title: string;
  image: string;
};

function GameCard({ id, title, image }: Props) {
  const [favGame, setFavGame] = useState(() => {
    const stored = getItem("favGame");
    const favorites = Array.isArray(stored) ? stored : [];
    return favorites.includes(id);
  });

  const handleFavGame = () => {
    if (favGame) return;

    const favorites = (getItem("favGame") as number[]) || [];
    const newFav = [...favorites, id];
    setItem("favGame", newFav);
    setFavGame(true);
  };

  return (
    <div className="game-card">
      <img className="game-card-image" src={image} alt={title}></img>
      <h2 className="game-card-title">{title}</h2>
      <h2 className="game-card-title">{id}</h2>
      <button className="button" onClick={handleFavGame}>
        {favGame ? "❤️" : "🤍"}
      </button>
    </div>
  );
}

export default GameCard;
