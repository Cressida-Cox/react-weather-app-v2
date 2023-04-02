import React from "react";
import Search from "./Search";
import Overview from "./Overview";
import Footer from "./Footer";
import Data from "./Data";

import "bootstrap/dist/css/bootstrap.css";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="weather-app-wrapper">
        <div className="weather-app">
          <Search />
          <Overview />
          <Data />
        </div>
        <Footer />
      </div>
    </div>
  );
}
