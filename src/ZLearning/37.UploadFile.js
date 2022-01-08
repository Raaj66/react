import React, { Component } from "react";

export default class UploadFile extends Component {
  upload(e) {
    console.warn(e.target.files);
    const files = e.target.files;
    const formData = new FormData();
    formData.append("img", files[0]);

    fetch("api", {
      method: "POST",
      body: formData,
    })
      .then((resp) => {
        resp.json();
      })
      .then((result) => {
        console.warn(result);
      });
  }
  render() {
    return (
      <div>
        <h1>Upload File</h1>
        <input
          type="file"
          name="img"
          onChange={(e) => {
            this.upload(e);
          }}
        />
      </div>
    );
  }
}
