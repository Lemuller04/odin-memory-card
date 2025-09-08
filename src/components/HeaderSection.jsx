const HeaderSection = ({ points = 0, best = 0 }) => (
  <header className="flex flex-col antialiased text-center gap-5">
    <h1 className="text-3xl">GitGud Memory Game</h1>
    <div className="flex flex-col gap-5 lg:flex-row lg:justify-between lg:px-5">
      <p>Get points by clicking gifs, but don't click the same gif twice.</p>
      <p role="status" aria-live="polite">
        Current score: <span className="font-bold">{points}</span> - Best score:{" "}
        <span className="font-bold">{best}</span>
      </p>
    </div>
  </header>
);

export default HeaderSection;
