import Navbar from "./components/Navbar";
import GameGrid from "./components/GameGrid";
import ListGroup from "./components/ListGroup";
import "./App.css";

function App() {
  return (
    <div className="parent">
      <div className="div1">
        <Navbar />
      </div>
      <div className="div2">
        <ListGroup />
      </div>
      <div className="div3">
        <GameGrid />
      </div>
    </div>
  );
}

export default App;
