import React, { Component } from "react";
import GlassesList from "./GlassesList";
import ImgModel from "./ImgModel";

export default class GlassesLayout extends Component {
  state = {
    glassesArr: [
  {
    id: 1,
    price: 30,
    name: "GUCCI G8850U",
    imgJpg: "./imageSrc/glassesImage/g1.jpg",
    url: "./imageSrc/glassesImage/v1.png",
    desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
  },
  {
    id: 2,
    price: 50,
    name: "GUCCI G8759H",
    imgJpg: "./imageSrc/glassesImage/g2.jpg",
    url: "./imageSrc/glassesImage/v2.png",
    desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
  },
  {
    id: 3,
    price: 30,
    name: "DIOR D6700HQ",
    imgJpg: "./imageSrc/glassesImage/g3.jpg",
    url: "./imageSrc/glassesImage/v3.png",
    desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
  },
  {
    id: 4,
    price: 70,
    name: "DIOR D6005U",
    imgJpg: "./imageSrc/glassesImage/g4.jpg",
    url: "./imageSrc/glassesImage/v4.png",
    desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
  },
  {
    id: 5,
    price: 40,
    name: "PRADA P8750",
    imgJpg: "./imageSrc/glassesImage/g5.jpg",
    url: "./imageSrc/glassesImage/v5.png",
    desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
  },
  {
    id: 6,
    price: 60,
    name: "PRADA P9700",
    imgJpg: "./imageSrc/glassesImage/g6.jpg",
    url: "./imageSrc/glassesImage/v6.png",
    desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
  },
  {
    id: 7,
    price: 80,
    name: "FENDI F8750",
    imgJpg: "./imageSrc/glassesImage/g7.jpg",
    url: "./imageSrc/glassesImage/v7.png",
    desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
  },
  {
    id: 8,
    price: 100,
    name: "FENDI F8500",
    imgJpg: "./imageSrc/glassesImage/g8.jpg",
    url: "./imageSrc/glassesImage/v8.png",
    desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
  },
  {
    id: 9,
    price: 60,
    name: "FENDI F4300",
    imgJpg: "./imageSrc/glassesImage/g9.jpg",
    url: "./imageSrc/glassesImage/v9.png",
    desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
  },
], 
detail: {},
  };

  handelChangeDetail= (glass) =>{
    this.setState({
      detail: glass,
    })
  }
  
  render() {
    return (
      <div>
        <div className="text">TRY GLASSES APP ONLINE</div>
        <div className="glassesLayout">
          <div className="overlay">
            <div className="container">
              <div className="row">
                <div className="col-7">
                  <GlassesList glassesArr={this.state.glassesArr} handelViewDetail={this.handelChangeDetail}/>
                </div>
                <div className="col-5">
                  <ImgModel detail={this.state.detail}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
