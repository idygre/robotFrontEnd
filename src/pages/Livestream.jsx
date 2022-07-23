import React from "react";
import mapping from "../img/mapping.png";

const Livestream = () => {
  return (
    <div className="livestreamPage">
      <div className="liveContainer">
        <h1 className="liveTitle">Live Stream</h1>
        <div className="imageHolder">
          <img src={mapping} alt="" className="image" />
        </div>

        <div className="startButtonDiv">
          <button
            type="button"
            name="start-live"
            id="startLive"
            className="startButton"
          ></button>

          <div className="label">
            <label htmlFor="startLive" className="btn">
              Start
            </label>
          </div>
        </div>

        <div className="stopButtonDiv">
          <button
            type="button"
            name="stop-live"
            id="stopLive"
            className="stopButton"
          ></button>

          <div className="label">
            <label htmlFor="stopLive" className="btn">
              Stop
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Livestream;
