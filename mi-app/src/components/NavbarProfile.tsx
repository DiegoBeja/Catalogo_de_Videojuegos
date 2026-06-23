import { Link } from "react-router-dom";
import { getItem } from "../Utils/localstorage";
import { useState, useEffect } from "react";

const apiKey = "ab2ad7cda2c14f3a8ee172f798da405e";
const URL = `https://api.rawg.io/api/games`;

interface Game {
  id: number;
  name: string;
  background_image: string;
}

function NavbarProfile() {
  const gameIds: number[] = getItem("favGame") || [];
  const [games, setGames] = useState<Game[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    if (gameIds.length === 0) {
      setGames([]);
      setIsLoading(false);
      return;
    }

    const fetchGames = async () => {
      setIsLoading(true);
      setIsError(false);
      try {
        const gamePromises = gameIds.map((id) =>
          fetch(`${URL}/${id}?key=${apiKey}`).then((res) => res.json()),
        );
        const fetchedGames = await Promise.all(gamePromises);
        setGames(fetchedGames);
      } catch (error) {
        setIsError(true);
        console.error("Error fetching games:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchGames();
  }, [JSON.stringify(gameIds)]);

  const stats = [
    { label: "Games Played", value: 184 },
    { label: "Favorites Games", value: gameIds.length },
    { label: "Hours", value: 1040 },
  ];

  return (
    <>
      <div className="profile-logo">
        <Link to={"/"}>
          <img
            src="/assets/logo.png"
            alt="Logo"
            style={{ height: 50, marginRight: 16 }}
          />
        </Link>
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
            {stats.map((stat) => (
              <div key={stat.label} className="stat-card">
                <div className="stat-number">{stat.value}</div>
                <div className="stat-label">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="profile-played-games">
          <h2>Played Games</h2>
          <p>Games played section</p>
        </div>

        <div className="favorite-games-section">
          <h2>Favorite Games</h2>
          {isLoading && <p>Cargando juegos...</p>}
          {isError && <p>Error al cargar los juegos</p>}
          {games && games.length > 0 && (
            <div className="favorite-games">
              {games.map((game) => (
                <div key={game.id} className="game-card">
                  <img
                    className="profile-game-card-image"
                    src={game.background_image}
                    alt={game.name}
                  />
                  <p>{game.name}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default NavbarProfile;
