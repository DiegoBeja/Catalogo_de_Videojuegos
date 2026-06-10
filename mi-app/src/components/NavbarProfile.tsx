import { Link } from "react-router-dom";

function NavbarProfile() {
  const games = [
    { title: "GTA V", image: "/assets/gta5.jpg" },
    { title: "COD", image: "/assets/cod.jpg" },
    { title: "Tomb Raider", image: "/assets/tombraider.jpg" },
  ];

  const stats = [
    { label: "Games Played", value: 184 },
    { label: "Games Completed", value: 21 },
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
          <div>
            {games.map((game) => (
              <img
                className="profile-games-played-card-image"
                key={game.title}
                src={game.image}
              ></img>
            ))}
          </div>
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
