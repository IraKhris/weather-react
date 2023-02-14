import React from "react";
import FormattedDate from "./FormattedDate";
// import WeatherTemperature from "./WeatherTemperature";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <h1>{props.data.city}</h1>
      <div className="row mt-3">
        <div className="col-sm-6 temperature-block">
          <div className="d-flex">
            <div>
              <img
                className="WeatherIcon"
                src={props.data.icon}
                alt="WeatherIcon"
              />
            </div>
            <div>
              <span className="temperature">
                {Math.round(props.data.temperature)}
              </span>
              <span className="unit">°C</span>
              {/* <WeatherTemperature celsius={props.data.temperature} /> */}
            </div>
          </div>
        </div>

        <div className="col-sm-6">
          <ul>
            <li>
              <FormattedDate date={props.data.date} />
            </li>
            <li className="text-capitalize">{props.data.description}</li>
          </ul>
          <div>
            <ul>
              <li className="mt-2">Humidity: {props.data.humidity}%</li>
              <li>Wind: {props.data.wind} km/h</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
