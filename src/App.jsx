import { useState, useEffect } from "react";

import HeaderSection from "./components/HeaderSection.jsx";
import CardsSection from "./components/CardsSection.jsx";
import FooterSection from "./components/FooterSection.jsx";

// TEMP FOR TESTING, WILL FETCH FROM GIPHY LATER
import gif0 from "./assets/gifs/Action Adventure Indie Game GIF.gif";
import gif1 from "./assets/gifs/Activate Hollow Knight GIF by Xbox.gif";
import gif2 from "./assets/gifs/Crash Insect GIF by Xbox.gif";
import gif3 from "./assets/gifs/Flash Insect GIF by Xbox.gif";
import gif4 from "./assets/gifs/Going Up Hollow Knight GIF by Xbox.gif";
import gif5 from "./assets/gifs/Hollow Knight Indie Game GIF.gif";
import gif6 from "./assets/gifs/Hollow Knight Jump GIF by Xbox.gif";
import gif7 from "./assets/gifs/Hollow Knight Princess GIF by Xbox.gif";
import gif8 from "./assets/gifs/Loop Travel GIF by Xbox.gif";
import gif9 from "./assets/gifs/Pucker Up Kiss Me GIF by Xbox.gif";
import gif10 from "./assets/gifs/Reveal Insect GIF by Xbox.gif";
import gif11 from "./assets/gifs/Video Game Fantasy GIF.gif";

const gifUrls = [
  gif0,
  gif1,
  gif2,
  gif3,
  gif4,
  gif5,
  gif6,
  gif7,
  gif8,
  gif9,
  gif10,
  gif11,
];

function App() {
  const [cards, setCards] = useState([]);
  const [clickedCards, setClickedCards] = useState([]);
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);

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
    setCards(shuffleArray(gifUrls));
  }, []);

  return (
    <div className="bg-sky-50 dark:bg-slate-900 text-zinc-950 dark:text-zinc-300 py-5 text-lg">
      <HeaderSection points={score} best={bestScore} />
      <CardsSection cards={cards} onCardClick={handleCardClick} />
      <FooterSection />
    </div>
  );
}

export default App;
