import React, { useState } from "react";
import WeatherDisplay from "./WeatherDisplay";
import Forecast from "./Forecast";
import axios from "axios";
import { RotatingLines } from "react-loader-spinner";

import "./Weather.css";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);

  function displayWeather(response) {
    // console.log(response.data);
    setWeatherData({
      ready: true,
      city: response.data.name,
      country: response.data.sys.country,
      date: new Date(response.data.dt * 1000),
      temperature: Math.round(response.data.main.temp),
      description: response.data.weather[0].description,
      wind: Math.round(response.data.wind.speed * 3.6),
      humidity: response.data.main.humidity,
      pressure: response.data.main.pressure,
      icon: response.data.weather[0].icon,

      // icon: `https://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
    });
  }
  function search() {
    const apiKey = "74a1988810687be79d98c8fd17e5884a";
    let unit = "metric";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${unit}`;

    axios.get(apiUrl).then(displayWeather);
  }

  function showMyPosition(position) {
    let lat = position.coords.latitude;
    let lon = position.coords.longitude;
    let unit = "metric";
    let apiKey = "74a1988810687be79d98c8fd17e5884a";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}
&lon=${lon}&units=${unit}&appid=${apiKey}`;
    axios.get(apiUrl).then(displayWeather);
  }

  function MyLocation(event) {
    event.preventDefault();
    navigator.geolocation.getCurrentPosition(showMyPosition);
  }

  function SearchCity(event) {
    event.preventDefault();
    search();
  }

  function CityChange(event) {
    setCity(event.target.value);
  }

  if (weatherData.ready) {
    return (
      <div className="Weather">
        <div className="appbody">
          <form className="mb-2" onSubmit={SearchCity}>
            <div className="row">
              <div className="col-9">
                <input
                  type="search"
                  placeholder="Search city..."
                  autoComplete="off"
                  autoFocus="on"
                  className="form-control"
                  onChange={CityChange}
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
                <button
                  className="btn btn-outline-light w-100"
                  type="click"
                  onClick={MyLocation}
                >
                  <i
                    className="fa-solid fa-location-arrow"
                    title="Current location"
                  ></i>
                </button>
              </div>
            </div>
          </form>
          <WeatherDisplay info={weatherData} />
          <Forecast />
        </div>
      </div>
    );
  } else {
    search();
    return (
      <div className="spinner">
        <RotatingLines
          strokeColor="grey"
          strokeWidth="5"
          animationDuration="0.75"
          width="96"
          visible={true}
        />
      </div>
    );
  }
}
