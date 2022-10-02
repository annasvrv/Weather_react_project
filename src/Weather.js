import React, { useState } from "react";
import FormattedDate from "./FormattedDate";
import axios from "axios";
import { RotatingLines } from "react-loader-spinner";

import "./Weather.css";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });

  function displayWeather(response) {
    // console.log(response.data);
    setWeatherData({
      ready: true,
      city: response.data.name,
      country: response.data.sys.country,
      date: new Date(response.data.dt * 1000),
      temperature: Math.round(response.data.main.temp),
      description: response.data.weather[0].description,
      wind: Math.round(response.data.wind.speed),
      humidity: response.data.main.humidity,
      pressure: response.data.main.pressure,
      icon: `https://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
    });
  }

  if (weatherData.ready) {
    return (
      <div className="Weather">
        <div className="appbody">
          <form className="mb-2">
            <div className="row">
              <div className="col-9">
                <input
                  type="search"
                  placeholder="Search city..."
                  autoComplete="off"
                  autoFocus="on"
                  className="form-control"
                />
              </div>
              <div className="col p-0">
                <button className="btn btn-outline-light w-100" type="submit">
                  <i
                    className="fa-solid fa-magnifying-glass"
                    title="Search"
                  ></i>
                </button>
              </div>
              <div className="col p-0">
                <button className="btn btn-outline-light w-100" type="click">
                  <i
                    className="fa-solid fa-location-arrow"
                    title="Current location"
                  ></i>
                </button>
              </div>
            </div>
          </form>
          <h1>
            {weatherData.city}, {weatherData.country}
          </h1>
          <div className="date mb-5">
            <span>
              <FormattedDate date={weatherData.date} />
            </span>
          </div>
          <div className="row currentWeather">
            <div className="col-6 d-flex justify-content-evenly">
              <div>
                <img
                  src={weatherData.icon}
                  alt={weatherData.description}
                  className="currentWeather"
                />
              </div>
              <div>
                <span className="temperature">{weatherData.temperature}</span>{" "}
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
                <li className="conditionDescription">
                  {weatherData.description}
                </li>
                <li>Wind: {weatherData.wind} km/h</li>
                <li>Humidity: {weatherData.humidity}%</li>
                <li>Pressure: {weatherData.pressure} hPa</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    const apiKey = "74a1988810687be79d98c8fd17e5884a";
    let unit = "metric";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=${apiKey}&units=${unit}`;

    axios.get(apiUrl).then(displayWeather);

    return (
      <RotatingLines
        strokeColor="grey"
        strokeWidth="5"
        animationDuration="0.75"
        width="96"
        visible={true}
      />
    );
  }
}
