import React from "react";
import "./App.css";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <div>
          <Weather defaultCity="Kyiv" />
        </div>
        <br />
        <footer>
          <a
            href="https://github.com/IraKhris/weather-react"
            target="_blank"
            rel="noreferrer"
          >
            Open Sourced{" "}
          </a>
          by{" "}
          <a href="https://irynakhrystych.dev" target="_blank" rel="noreferrer">
            Iryna Khrystych
          </a>
        </footer>
      </div>
    </div>
  );
}
