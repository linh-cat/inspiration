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
      <div className="button__group">
        <div className="icon">
          <div className="icon__player">
            <img alt="player" src="/player.png" />
          </div>
          <div className="icon__group">
            <div className="icon__group--view">
              <img src="/svg_widget_seen.png" alt="seen" />
              <p>9999</p>
            </div>
            <div className="icon__group--like">
              <img src="/svg_widget_like.png" alt="like" />
              <p>9990</p>
            </div>
            <div className="icon__group--share">
              <img src="/svg_widget_share.png" alt="share" />
              <p>999</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
