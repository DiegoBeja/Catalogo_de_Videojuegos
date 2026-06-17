import { useState } from "react";

type Props = {
  onGenreSelect: (genre: string) => void;
};

function ListGroup({ onGenreSelect }: Props) {
  const items = [
    "Action",
    "Adventure",
    "Shooters",
    "Hack and slash",
    "Rol",
    "Strategy",
    "Sports",
    "Puzzle",
    "Horror",
    "Racing",
    "MOBA",
    "Battle Royal",
    "Casual",
    "Plataformer",
    "Narrative",
  ];
  const message = items.length == 0 && <p>Items no found</p>;
  const [selectedIndex, setSelectedIndex] = useState(-1);

  const handleChange = (index: number, genre: string) => {
    setSelectedIndex(index);
    onGenreSelect(genre);
  };

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
              handleChange(index, item.toLowerCase());
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
