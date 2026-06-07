import GameGrid from "./GameGrid";
import { useState } from "react";

function NavbarProfile() {
  const [games, setGames] = useState([
    { title: "GTA V", image: "/assets/gta5.jpg" },
    { title: "COD", image: "/assets/cod.jpg" },
    { title: "Tomb Raider", image: "/assets/tombraider.jpg" },
  ]);

  return (
    <>
      <div>
        <img
          src="/assets/favicon.svg"
          alt="Logo"
          style={{ height: 40, marginRight: 16 }}
        />
      </div>

      <div className="profile">
        <div className="profile-info">
          <img
            src="/assets/images.jpg"
            alt="Logo"
            style={{ height: 40, marginRight: 16, borderRadius: 30 }}
          />
          <h3>Diego Bejarano</h3>
          <div className="profile-stats">
            <h6>Games Played</h6>
            <h6>Games Completed</h6>
            <h6>Hours</h6>
          </div>
        </div>

        <div className="profile-played-games">
          <h2>Played Games</h2>
        </div>

        <div className="favorite-games-section">
          <h2>Favorite Games</h2>
          <div className="favorite-games">
            {games.map((game) => (
              <img
                className="profile-game-card-image"
                key={game.title}
                src={game.image}
                alt={game.title}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default NavbarProfile;
