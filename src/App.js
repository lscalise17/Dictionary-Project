import "./App.css";
import Dictionary from "./Dictionary";

function App() {
  return (
    <div className="App">
      <div className="Container">
        <main>
          <Dictionary defaultKeyword="Wine" />
        </main>
        <footer>
          This project was coded by Lauren Akinrinade and is
          <a
            href="https://github.com/lscalise17/Dictionary-Project"
            target="_blank"
            rel=" noopener noreferrer"
          >
            {" "}
            Open-Sourced on GitHub
          </a>
          {""} and
          <a
            href="https://vocal-creponne-23d1ae.netlify.app/"
            target="_blank"
            rel=" noopener noreferrer"
          >
            {" "}
            Hosted on Netlify
          </a>
        </footer>
      </div>
    </div>
  );
}

export default App;
