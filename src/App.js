import React from "react";
import "./App.css";
import Row from "./Row";

function App() {
  const activeMemories = () => {
    const active = document.getElementById("active");
    const elPlayer = document.getElementById("player");
    active.classList.toggle("playerActive");
    elPlayer.classList.toggle("spinPlayer");
  };
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

      <ul className="memories__group" id="active">
        <li>
          <div className="player" onClick={activeMemories}>
            <img alt="player" src="/player.png" id="player" />
          </div>
          <div className="action_group">
            <div className="action_icons">
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
            <div className="action_text">
              <p>Join our Gallery Memories</p>
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
}

export default App;
