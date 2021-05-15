import React from "react";
import "./App.css";
import Row from "./Row";

function App() {
  return (
    <div className="app">
      <div className="header">
        <h1>Inspiration</h1>
        <p className="text">Be inspired by our exhibitions</p>
        <hr className="line" />
      </div>

      <div className="top__pick">
        <Row title="Visitor's Top Pick" isLargeRow={true} />
      </div>
      <div className="gallery__foryou">
        <Row title="Just For You" />
      </div>
      <div className="gallery__recommend">
        <Row title="Gallery Recommends" />
      </div>
    </div>
  );
}

export default App;
