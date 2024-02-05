import React, { Component } from "react";
import { glassesArr } from "./data";

export default class GlassesList extends Component {

  renderGlassesList = () => {
    return glassesArr.map((item) => {
      return (
        <a>
          <img
            className=""
            style={{
              height: "auto",
              width: "30%",
              objectFit: "cover",
              scale: "0.7",
            }}
            src={item.imgJpg}
            alt
          />
        </a>
      );
    });
  };
  render() {
    return <div className="divJpg m-5 ">{this.renderGlassesList()}</div>;
  }
}
