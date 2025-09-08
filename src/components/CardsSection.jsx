import Card from "./Card.jsx";

const CardsSection = ({ cards, onCardClick }) => (
  <main
    className="
      my-5 grid place-content-center gap-2 overflow-hidden
      grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4
    "
  >
    {cards.map((card) => (
      <Card key={card.id} content={card} onClick={() => onCardClick(card.id)} />
    ))}
  </main>
);

export default CardsSection;
