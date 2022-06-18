import uploadImg from "../img/uploadImg.jpg";

import React, { Component } from "react";

export default class ImagePortal extends Component {
  state = {
    uploadImg,
  };

  imageHandler = (e) => {
    const reader = new FileReader();
    reader.onload = () => {
      if (reader.readyState === 2) {
        this.setState({ uploadImg: reader.result });
      }
    };
    reader.readAsDataURL(e.target.files[0]);
  };

  render() {
    const { uploadImg } = this.state;
    return (
      <div className="uploadPage">
        <div className="uploadContainer">
          <h1 className="uploadTitle">Image Portal</h1>
          <div className="imageHolder">
            <img src={uploadImg} alt="" className="image" />
          </div>

          <input
            type="file"
            accept="image/*"
            name="image-upload"
            id="input"
            onChange={this.imageHandler}
          />

          <button
            type="button"
            name="process-image"
            id="process"
            className="processButton"
          >
            Process Image
          </button>

          <div className="label">
            <label htmlFor="input" className="image-upload">
              Upload Image
            </label>
          </div>

          <div className="label">
            <label htmlFor="process" className="process-image">
              Process Image
            </label>
          </div>
        </div>
      </div>
    );
  }
}
