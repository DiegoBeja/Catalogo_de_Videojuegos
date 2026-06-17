import Navbar from "./components/Navbar";
import GameGrid from "./components/GameGrid";
import ListGroup from "./components/ListGroup";
import "./App.css";
import { useState } from "react";

function App() {
  const [games, setGames] = useState([
    { title: "GTA V", image: "/assets/gta5.jpg" },
    { title: "COD", image: "/assets/cod.jpg" },
    { title: "Tomb Raider", image: "/assets/tombraider.jpg" },
  ]);

  const handleAddGame = (game: { title: string; image: string }) => {
    setGames((prev) => [...prev, game]);
  };

  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (query: string) => {
    setSearchTerm(query);
  };

  const [genresList, setGenresList] = useState("");

  const handleGenres = (genre: string) => {
    setGenresList(genre);
  };

  return (
    <div className="parent">
      <div className="div1">
        <Navbar onAddGame={handleAddGame} onSearch={handleSearch} />
      </div>
      <div className="div2">
        <ListGroup onGenreSelect={handleGenres} />
      </div>
      <div className="div3">
        <GameGrid searchTerm={searchTerm} selectedGenre={genresList} />
      </div>
    </div>
  );
}

export default App;
