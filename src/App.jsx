import { useState, useEffect } from "react";

import HeaderSection from "./components/HeaderSection.jsx";
import CardsSection from "./components/CardsSection.jsx";

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

  const shuffleArray = (arr) => [...arr].sort(() => Math.random() - 0.5);
  const shuffleCards = () => setCards((prev) => shuffleArray(prev));

  useEffect(() => {
    setCards(shuffleArray(gifUrls));
  }, []);

  return (
    <div className="bg-sky-50 text-zinc-950 py-5 text-lg h-screen">
      <HeaderSection />
      <CardsSection cards={cards} onCardClick={shuffleCards} />
    </div>
  );
}

export default App;
