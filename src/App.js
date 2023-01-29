import React from "react";
import "./App.css";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <div>
          <h1>Weather Search</h1>
          <Weather defaultCity="Berlin" />
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
    </div>
  );
}
