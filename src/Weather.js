import React from "react";
import "./Weather.css";

export default function Weather() {
  return (
    <div className="Weather">
      <div className="appbody">
        <form>
          <div className="row">
            <div className="col-10">
              <input
                type="search"
                placeholder="Enter location..."
                autoComplete="off"
                className="form-control"
              />
            </div>
            <div className="col p-0">
              <button className="btn btn-outline-light" type="submit">
                <i className="fa-solid fa-magnifying-glass" title="Search"></i>
              </button>
            </div>
            <div className="col p-0">
              <button className="btn btn-outline-light" type="click">
                <i
                  className="fa-solid fa-location-arrow"
                  title="Current location"
                ></i>
              </button>
            </div>
          </div>
        </form>
        <h1>Larnaca, Cyprus</h1>
        <ul>
          <li>Friday 12.05</li>
          <li>Mostly Cloudy</li>
        </ul>
        <div className="row">
          <div className="col-6">
            <img
              src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
              alt="partly_cloudy"
            />
            <span>23</span>
            <a href="/">ºC</a> | <a href="/">ºF</a>
          </div>
          <div className="col-6">
            <ul>
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
