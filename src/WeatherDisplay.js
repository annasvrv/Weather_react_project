import React from "react";
import FormattedDate from "./FormattedDate";


export default function WeatherDisplay(props) {
  return (
    <div className="WeatherDisplay">
      <h1>
        {props.info.city}, {props.info.country}
      </h1>
      <div className="date mb-5">
        <span>
          <FormattedDate date={props.info.date} />
        </span>
      </div>
      <div className="row currentWeather">
        <div className="col-6 d-flex justify-content-evenly">
          <div>
            <img
              src={props.info.icon}
              alt={props.info.description}
              className="currentWeather"
            />
          </div>
          <div>
            <span className="temperature">{props.info.temperature}</span>{" "}
            <span className="unitBlock">
              <a href="/" className="units">
                ºC
              </a>{" "}
              |{" "}
              <a href="/" className="units">
                ºF
              </a>
            </span>
          </div>
        </div>
        <div className="col-6">
          <ul className="conditions">
            <li className="conditionDescription">{props.info.description}</li>
            <li>Wind: {props.info.wind} km/h</li>
            <li>Humidity: {props.info.humidity}%</li>
            <li>Pressure: {props.info.pressure} hPa</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
