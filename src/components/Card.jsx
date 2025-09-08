const Card = ({ content, onClick }) => (
  <button
    onClick={onClick}
    className="ring-sky-500 hover:ring-6 focus:ring-6 focus:outline-none active:scale-98 dark:hover:ring-purple-900 dark:focus:ring-purple-900"
  >
    <img src={content} alt="" />
  </button>
);

export default Card;
