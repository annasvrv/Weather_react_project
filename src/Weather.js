import React from "react";
import "./Weather.css";

export default function Weather() {
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
                <i className="fa-solid fa-magnifying-glass" title="Search"></i>
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
        <h1>Larnaca, Cyprus</h1>
        <div className="date mb-5">September 29 17:32 Friday</div>
        <div className="row">
          <div className="col-6 d-flex justify-content-evenly">
            <div>
              <img
                src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
                alt="Partly Cloudy"
                className="currentWeather"
              />
            </div>
            <div>
              <span className="temperature">23</span>{" "}
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
              <li>Mostly Cloudy</li>
              <li>Precipitation: 0%</li>
              <li>Humidity: 57%</li>
              <li>Wind: 5 km/h</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
