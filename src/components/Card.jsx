const Card = ({ content, onClick }) => (
  <button
    onClick={onClick}
    className="ring-sky-500 hover:ring-6 focus:ring-6 focus:outline-none active:scale-98"
  >
    <article>
      <img src={content} alt="" />
    </article>
  </button>
);

export default Card;
