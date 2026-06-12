import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useRef, useState } from "react";
import AddGame from "./AddGame";
import { Link } from "react-router-dom";

type Props = {
  onAddGame?: (game: { title: string; image: string }) => void;
};

const apiKey = "ab2ad7cda2c14f3a8ee172f798da405e";

function Navbar({ onAddGame }: Props) {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [suggestions, setSuggestions] = useState<any[]>([]);
  const debounceRef = useRef<number | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const q = e.target.value;
    setQuery(q);
    if (debounceRef.current) window.clearTimeout(debounceRef.current);
    debounceRef.current = window.setTimeout(async () => {
      if (!q) {
        setSuggestions([]);
        return;
      }
      const url = `https://api.rawg.io/api/games?key=${apiKey}&search=${encodeURIComponent(q)}&page_size=8`;
      const res = await fetch(url);
      const data = await res.json();
      setSuggestions(data.results ?? []);
    }, 300);
  };

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
          <Col>
            <div className="search-box" style={{ position: "relative" }}>
              <Form.Control
                type="text"
                placeholder="Search"
                value={query}
                onChange={handleChange}
                aria-label="Search games"
                autoComplete="off"
              />

              {query.trim() !== "" && suggestions.length > 0 && (
                <ul className="suggestions-dropdown">
                  {suggestions.map((s) => (
                    <li
                      key={s.id}
                      onMouseDown={(e) => {
                        // use onMouseDown to avoid losing focus before click
                        e.preventDefault();
                        setQuery(s.name);
                        setSuggestions([]);
                      }}
                    >
                      {s.name}
                    </li>
                  ))}
                </ul>
              )}
            </div>
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
