type Props = {
  title: string;
  image: string;
};

function GameCard({ title, image }: Props) {
  return (
    <div className="game-card">
      <img className="game-card-image" src={image} alt={title}></img>
      <h2 className="game-card-title">{title}</h2>
      <button className="button">❤️</button>
    </div>
  );
}

export default GameCard;
