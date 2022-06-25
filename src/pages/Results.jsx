import React from "react";

const Results = () => {
  return (
    <div className="trainPage">
      <div className="trainContainer">
        <div className="trainTitle">
          <h1>Training Results</h1>
        </div>
        <div className="trainBox">
          <h1 className="detectedTitle">Predominant colors detected</h1>

          <div className="detected1">
            <h1 className="colorTitle">Detection #1</h1>
            <h1 className="colorName">Color</h1>
            <div className="colorCircle"></div>
            <h1 className="colorCode">#00000</h1>
          </div>

          <div className="detected2">
            <h1 className="colorTitle">Detection #2</h1>
            <h1 className="colorName">Color</h1>
            <div className="colorCircle"></div>
            <h1 className="colorCode">#00000</h1>
          </div>
        </div>
        <div className="trainButtonDiv">
          <button
            type="button"
            name="send-results"
            id="train"
            className="trainButton"
          ></button>

          <div className="label">
            <label htmlFor="train" className="send-results">
              Send Results
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Results;
