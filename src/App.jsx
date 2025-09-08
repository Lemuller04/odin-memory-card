import { useState, useEffect } from "react";

import HeaderSection from "./components/HeaderSection.jsx";
import CardsSection from "./components/CardsSection.jsx";
import FooterSection from "./components/FooterSection.jsx";

import gif1 from "./assets/gifs/Action Adventure Indie Game GIF.gif";
import gif2 from "./assets/gifs/Activate Hollow Knight GIF by Xbox.gif";
import gif3 from "./assets/gifs/Crash Insect GIF by Xbox.gif";
import gif4 from "./assets/gifs/Flash Insect GIF by Xbox.gif";
import gif5 from "./assets/gifs/Going Up Hollow Knight GIF by Xbox.gif";
import gif6 from "./assets/gifs/Hollow Knight Indie Game GIF.gif";
import gif7 from "./assets/gifs/Hollow Knight Jump GIF by Xbox.gif";
import gif8 from "./assets/gifs/Hollow Knight Princess GIF by Xbox.gif";
import gif9 from "./assets/gifs/Loop Travel GIF by Xbox.gif";
import gif10 from "./assets/gifs/Pucker Up Kiss Me GIF by Xbox.gif";
import gif11 from "./assets/gifs/Reveal Insect GIF by Xbox.gif";
import gif12 from "./assets/gifs/Video Game Fantasy GIF.gif";

const localGifs = [
  { id: "local1", url: gif1, title: "Local GIF 1" },
  { id: "local2", url: gif2, title: "Local GIF 2" },
  { id: "local3", url: gif3, title: "Local GIF 3" },
  { id: "local4", url: gif4, title: "Local GIF 4" },
  { id: "local5", url: gif5, title: "Local GIF 5" },
  { id: "local6", url: gif6, title: "Local GIF 6" },
  { id: "local7", url: gif7, title: "Local GIF 7" },
  { id: "local8", url: gif8, title: "Local GIF 8" },
  { id: "local9", url: gif9, title: "Local GIF 9" },
  { id: "local10", url: gif10, title: "Local GIF 10" },
  { id: "local11", url: gif11, title: "Local GIF 11" },
  { id: "local12", url: gif12, title: "Local GIF 12" },
];

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

  const handleCardClick = (id) => {
    if (clickedCards.includes(id)) {
      setScore(0);
      setClickedCards([]);
    } else {
      const newScore = score + 1;
      setScore(newScore);
      setClickedCards([...clickedCards, id]);

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
        const srcs = data.map((gif) => ({
          id: gif.data.id,
          url: gif.data.images.original.url,
          title: gif.data.title,
        }));
        setCards(shuffleArray(srcs));
        setLoading(false);
      } catch (error) {
        console.error("Failed to fetch GIFs: ", error);
        setCards(shuffleArray(localGifs));
        setLoading(false);
      }
    };

    fetchAllGifs();
  }, []);

  useEffect(() => {
    localStorage.setItem("bestScore", bestScore);
  }, [bestScore]);

  return (
    <div className="bg-sky-50 dark:bg-slate-900 text-zinc-950 dark:text-zinc-300 py-5 text-lg size-full flex flex-col flex-1">
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
