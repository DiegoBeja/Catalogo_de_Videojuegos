import { useState } from "react";

function ListGroup() {
  const items = [
    "Accion",
    "Aventura",
    "Shooters",
    "Hack and slash",
    "Rol",
    "Estrategia",
  ];
  const message = items.length == 0 && <p>Items no found</p>;
  const [selectedIndex, setSelectedIndex] = useState(-1);

  return (
    <>
      <h1>Genres</h1>
      {message}
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            style={{ background: "#1c1f2a", color: "#fff" }}
            className={
              selectedIndex == index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={item}
            onClick={() => {
              setSelectedIndex(index);
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
