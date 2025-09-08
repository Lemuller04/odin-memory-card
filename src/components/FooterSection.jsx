import "../App.css";

const FooterSection = () => (
  <footer className="footer flex flex-col antialiased text-center gap-5">
    <p className="text-sm text-slate-500 dark:text-slate-400">
      Project by
      <a
        href="https://github.com/Lemuller04"
        target="_blank"
        rel="noopener noreferrer"
      >
        {" "}
        Leonardo Müller
      </a>
      , based on
      <a
        href="https://theodinproject.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        {" "}
        The Odin Project
      </a>{" "}
      –
      <a
        href="https://www.theodinproject.com/lessons/node-path-react-new-memory-card"
        target="_blank"
        rel="noopener noreferrer"
      >
        {" "}
        Memory Card
      </a>
      .
    </p>
  </footer>
);

export default FooterSection;
