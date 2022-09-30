import React from "react";
import Weather from "./Weather";

import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather />
        <footer>
          This project was coded by{" "}
          <a
            href="https://www.linkedin.com/in/anna-suvorova-1742b9197/"
            target="_blank"
            rel="noreferrer"
            title="LinkedIn profile"
          >
            Anna S
          </a>{" "}
          and it is{" "}
          <a
            href="https://github.com/annasvrv/Weather_react_project"
            rel="noreferrer"
            target="_blank"
            title="GitHubCode"
          >
            open-sourced code on GitHub
          </a>
        </footer>
      </div>
    </div>
  );
}
