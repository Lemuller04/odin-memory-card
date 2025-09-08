const Card = ({ card, onClick }) => (
  <button
    onClick={onClick}
    className="ring-sky-500 hover:ring-6 focus:ring-6 focus:outline-none active:scale-98 dark:hover:ring-purple-900 dark:focus:ring-purple-900"
  >
    <img src={card.url} alt={card.title || "Memory card"} />
  </button>
);

export default Card;
