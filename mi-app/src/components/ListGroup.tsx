import { useState } from "react";

function ListGroup() {
  const items = ["Mexicali", "Tijuana", "Tecate", "Ensenada"];
  //const items = [];
  const message = items.length == 0 && <p>Items no found</p>;
  const [selectedIndex, setSelectedIndex] = useState(-1);

  return (
    <>
      <h1>List</h1>
      {message}
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            className={ selectedIndex == index ? 'list-group-item active' : 'list-group-item'}
            key={item}
            onClick={() => { setSelectedIndex(index)}}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
