import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./Forecast.css";

export default function Forecast() {
  return (
    <div className="Forecast">
      <div className=" weather-forecast">
        {/* <div className="card-body p-0"> */}
          <div className="row">
            <div className="col forecastDay">
              <strong className="forecastWeekDay">Fri</strong>
              <div className="forecastIcon">
                <WeatherIcon code="02d" />
              </div>
              <span className="forecastTemp">25</span>ºC
            </div>
            <div className="col forecastDay">
              <strong className="forecastWeekDay">Fri</strong>
              <div className="forecastIcon">
                <WeatherIcon code="02d" />
              </div>
              <span className="forecastTemp">25</span>ºC
            </div>
            <div className="col forecastDay">
              <strong className="forecastWeekDay">Fri</strong>
              <div className="forecastIcon">
                <WeatherIcon code="02d" />
              </div>
              <span className="forecastTemp">25</span>ºC
            </div>
            <div className="col forecastDay">
              <strong className="forecastWeekDay">Fri</strong>
              <div className="forecastIcon">
                <WeatherIcon code="02d" />
              </div>
              <span className="forecastTemp">25</span>ºC
            </div>
            <div className="col forecastDay">
              <strong className="forecastWeekDay">Fri</strong>
              <div className="forecastIcon">
                <WeatherIcon code="02d" />
              </div>
              <span className="forecastTemp">25</span>ºC
            </div>
            <div className="col forecastDay">
              <strong className="forecastWeekDay">Fri</strong>
              <div className="forecastIcon">
                <WeatherIcon code="02d" />
              </div>
              <span className="forecastTemp">25</span>ºC
            </div>
          </div>
          {/* <ul className="d-flex justify-content-evenly">
            <li className="forecastDay">
              <strong className="forecastWeekDay">Fri</strong>
              <div className="forecastIcon">
                <WeatherIcon code="02d" />
              </div>
              <span className="forecastTemp">25</span>ºC
            </li>
            <li className="forecastDay">
              <strong className="forecastWeekDay">Sat</strong>
              <div className="forecastIcon">
                <WeatherIcon code="02d" />
              </div>
              <span className="forecastTemp">25</span>ºC
            </li>
            <li className="forecastDay">
              <strong className="forecastWeekDay">Sun</strong>
              <div className="forecastIcon">
                <WeatherIcon code="02d" />
              </div>
              <span className="forecastTemp">25</span>ºC
            </li>
            <li className="forecastDay">
              <strong className="forecastWeekDay">Mon</strong>
              <div className="forecastIcon">
                <WeatherIcon code="02d" />
              </div>
              <span className="forecastTemp">25</span>ºC
            </li>
            <li className="forecastDay">
              <strong className="forecastWeekDay">Tue</strong>
              <div className="forecastIcon">
                <WeatherIcon code="02d" />
              </div>
              <span className="forecastTemp">25</span>ºC
            </li>
            <li className="forecastDay">
              <strong className="forecastWeekDay">Wed</strong>
              <div className="forecastIcon">
                <WeatherIcon code="02d" />
              </div>
              <span className="forecastTemp">25</span>ºC
            </li>
            <li className="forecastDay">
              <strong className="forecastWeekDay">Thu</strong>
              <div className="forecastIcon">
                <WeatherIcon code="02d" />
              </div>
              <span className="forecastTemp">25</span>ºC
            </li>
          </ul> */}
        {/* </div> */}
      </div>
    </div>
  );
}
