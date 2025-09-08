import { useState, useEffect } from "react";

import HeaderSection from "./components/HeaderSection.jsx";
import CardsSection from "./components/CardsSection.jsx";
import FooterSection from "./components/FooterSection.jsx";

const gifIds = [
  "DeSZZmHos0XvOGN117",
  "3wthwRK00REzScZnEs",
  "9PalpZKlDt5iNfnFXT",
  "bGJWrE1qNek88Jg0xb",
  "hiDIKdYU5o6gC7042Z",
  "mIg1Ik3KYxy0WylN3W",
  "seP7yUAPbxsCJaNEal",
  "aW3hGTIxHhcOQ5sW2V",
  "Z5yJ9iryTtZr2bjsXV",
  "81qWBngrrA15zFOnXz",
  "pkQgx00egUQ9m58UgV",
  "OmgPMW73sBjupoKFch",
];

const urlStart = "https://api.giphy.com/v1/gifs/";
const urlEnd = "?api_key=7ZaylFM0cQcYpqefKhgjRUWXCJeV7TcI";

function App() {
  const [cards, setCards] = useState([]);
  const [clickedCards, setClickedCards] = useState([]);
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const [loading, setLoading] = useState(true);

  const shuffleArray = (arr) => [...arr].sort(() => Math.random() - 0.5);
  const shuffleCards = () => setCards((prev) => shuffleArray(prev));

  const handleCardClick = (cardUrl) => {
    if (clickedCards.includes(cardUrl)) {
      setScore(0);
      setClickedCards([]);
    } else {
      const newScore = score + 1;
      setScore(newScore);
      setClickedCards([...clickedCards, cardUrl]);

      if (newScore > bestScore) {
        setBestScore(newScore);
      }
    }

    setCards((prev) => shuffleArray(prev));
  };

  useEffect(() => {
    const storedBest = localStorage.getItem("bestScore");
    if (storedBest) setBestScore(Number(storedBest));

    const fetchAllGifs = async () => {
      setLoading(true);
      try {
        const urls = gifIds.map((id) => `${urlStart}${id}${urlEnd}`);
        const responses = await Promise.all(urls.map((url) => fetch(url)));
        const data = await Promise.all(responses.map((res) => res.json()));
        const srcs = data.map((gif) => gif.data.images.original.url);
        setCards(shuffleArray(srcs));
        setLoading(false);
      } catch (error) {
        console.error("Failed to fetch GIFs: ", error);
        setLoading(false);
      }
    };

    fetchAllGifs();
  }, []);

  useEffect(() => {
    localStorage.setItem("bestScore", bestScore);
  }, [bestScore]);

  return (
    <div className="bg-sky-50 dark:bg-slate-900 text-zinc-950 dark:text-zinc-300 py-5 text-lg">
      <HeaderSection points={score} best={bestScore} />
      {loading ? (
        <p className="size-full">Loading GIFs...</p>
      ) : (
        <CardsSection cards={cards} onCardClick={handleCardClick} />
      )}
      <FooterSection />
    </div>
  );
}

export default App;
