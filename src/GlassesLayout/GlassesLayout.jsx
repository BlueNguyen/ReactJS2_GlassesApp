import React, { Component } from "react";
import GlassesList from "./GlassesList";
import ImgModel from "./ImgModel";

export default class GlassesLayout extends Component {
  state = {
    tryGlass: "./imageSrc/glassesImage/v1.png",
  };
  render() {
    return (
      <div>
        <div className="text">TRY GLASSES APP ONLINE</div>
        <div className="glassesLayout">
          <div className="overlay">
            <div className="container">
              <div className="row">
                <div className="col-7">
                  <GlassesList />
                </div>
                <div className="col-5">
                  <ImgModel srcProp={this.state.tryGlass} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
