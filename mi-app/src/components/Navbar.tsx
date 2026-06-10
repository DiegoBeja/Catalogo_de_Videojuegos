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
      <Link to={"/"}>
        <img
          src="/assets/logo.png"
          alt="Logo"
          style={{ height: 50, marginRight: 16 }}
        />
      </Link>

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
      <Link
        to="/Profile"
        style={{
          width: 42,
          height: 42,
          borderRadius: "50%",
          overflow: "hidden",
          display: "inline-flex",
          alignItems: "center",
          justifyContent: "center",
          marginRight: 10,
          border: "1px solid transparent",
          textDecoration: "none",
        }}
      >
        <img
          src="/assets/images.jpg"
          alt="Perfil"
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
      </Link>
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
