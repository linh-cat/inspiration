import React from "react";
import "./Row.css";

function Row({ title, isLargeRow }) {
  return (
    <div className="row">
      <h4>{title}</h4>
      <div className="content">
        <div className="main">
          <div className={isLargeRow ? "recommend" : "default"}></div>
          <span className="text">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          </span>
        </div>
        <div className="main">
          <div className={isLargeRow ? "recommend" : "default"}></div>
          <span className="text">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          </span>
        </div>
        <div className="main">
          <div className={isLargeRow ? "recommend" : "default"}></div>
          <span className="text">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          </span>
        </div>
        <div className="main">
          <div className={isLargeRow ? "recommend" : "default"}></div>
          <span className="text">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          </span>
        </div>
      </div>
    </div>
  );
}

export default Row;
