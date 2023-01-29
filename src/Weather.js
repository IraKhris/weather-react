// import React, { useState } from "react";
// import axios from "axios";

// export default function Search(props) {
//   let [city, setCity] = useState("");
//   let [temperature, setTemperature] = useState("");
//   let [description, setDescription] = useState("");
//   let [humidity, setHumidity] = useState("");
//   let [wind, setWind] = useState("");
//   let [icon, setIcon] = useState("");
//   let [loaded, setLoaded] = useState(false);

//   function showWeather(response) {
//     setLoaded(true);
//     setTemperature(Math.round(response.data.main.temp));
//     setHumidity(response.data.main.humidity);
//     setWind(Math.round(response.data.wind.speed));
//     setDescription(response.data.weather[0].description);
//     setIcon(
//       `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`
//     );
//   }

//   function handleSubmit(event) {
//     event.preventDefault();
//     let apiKey = "5f472b7acba333cd8a035ea85a0d4d4c";
//     let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
//     axios.get(apiUrl).then(showWeather);
//   }

//   function rememberCity(event) {
//     setCity(event.target.value);
//   }

//   let form = (
//     <form onSubmit={handleSubmit}>
//       <input
//         type="search"
//         placeholder="Type the city..."
//         onChange={rememberCity}
//       />
//       <button type="submit">Search</button>
//     </form>
//   );

//   if (loaded) {
//     return (
//       <div className="Search">
//         {form}
//         <ul>
//           <li>Temperature: {temperature}°C</li>
//           <li>Description: {description}</li>
//           <li>Humidity: {humidity}%</li>
//           <li>Wind: {wind} m/h</li>
//           <li>
//             <img src={icon} alt={description} />
//           </li>
//         </ul>
//       </div>
//     );
//   } else {
//     return <div className="Search">{form}</div>;
//   }
// }

import React, { useState } from "react";
import axios from "axios";
import WeatherInfo from "./WeatherInfo";
import "./Weather.css";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);

  function handleResponse(response) {
    setWeatherData({
      ready: true,
      // coordinates: response.data.coord,
      temperature: response.data.main.temp,
      humidity: response.data.main.humidity,
      // date: new Date(response.data.dt * 1000),
      description: response.data.weather[0].description,
      icon: response.data.weather[0].icon,
      wind: response.data.wind.speed,
      city: response.data.name,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleCityChange(event) {
    setCity(event.target.value);
  }

  function search() {
    const apiKey = "7a5e63a39ee7ebd191fd995068ae3489";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }

  if (weatherData.ready) {
    return (
      <div className="Weather">
        <form onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-9">
              <input
                type="search"
                placeholder="Enter a city.."
                className="form-control"
                autoFocus="on"
                onChange={handleCityChange}
              />
            </div>
            <div className="col-3">
              <input
                type="submit"
                value="Search"
                className="btn btn-primary w-100"
              />
            </div>
          </div>
        </form>
        <WeatherInfo data={weatherData} />
        {/* <WeatherForecast coordinates={weatherData.coordinates} /> */}
      </div>
    );
  } else {
    search();
    return "Loading...";
  }
}
