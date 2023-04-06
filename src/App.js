import React from "react";
import Footer from "./Footer";
import Weather from "./Weather";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";

export default function App() {
  return (
    <div className="weather-app-wrapper">
      <div className="weather-app">
        <Weather defaultCity="London" />
      </div>
      <Footer />
    </div>
  );
}
