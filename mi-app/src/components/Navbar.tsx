import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useState } from "react";
import AddGame from "./AddGame";
import { Link } from "react-router-dom";

type Props = {
  onAddGame?: (game: { title: string; image: string }) => void;
};

function Navbar({ onAddGame }: Props) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav
      style={{ background: "#1c1f2a", padding: "10px 16px" }}
      className="d-flex align-items-center"
    >
      <img
        src="/assets/favicon.svg"
        alt="Logo"
        style={{ height: 40, marginRight: 16 }}
      />
      <Form style={{ background: "transparent", flex: 1 }}>
        <Row>
          <Col xs="auto">
            <Form.Control
              type="text"
              placeholder="Search"
              style={{ width: "290%" }}
            />
          </Col>
        </Row>
      </Form>
      <button
        className="button"
        onClick={() => {
          setIsOpen(true);
        }}
      >
        Add
      </button>
      {isOpen && (
        <AddGame
          show={isOpen}
          onClose={() => setIsOpen(false)}
          onAddGame={onAddGame ?? (() => {})}
        />
      )}
    </nav>
  );
}

export default Navbar;
