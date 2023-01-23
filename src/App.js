import "./App.css";
import Search from "./Search";

function App() {
  return (
    <div className="App">
      <div>
        <h1>Weather Search Engine</h1>
        <Search />
      </div>
      <br />
      <div>
        <a
          href="https://github.com/IraKhris/weather-react"
          target="_blank"
          rel="noreferrer"
        >
          Open Sourced{" "}
        </a>
        by{" "}
        <a
          href="https://gregarious-sprinkles-cd236b.netlify.app"
          target="_blank"
          rel="noreferrer"
        >
          Iryna Khrystych
        </a>
      </div>
    </div>
  );
}

export default App;
