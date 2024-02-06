import React, { Component } from 'react'

export default class GlassesItem extends Component {
  
  render() {
    let {imgJpg}= this.props.data
    return (
        <a>
          <img
            onClick={()=>{this.props.handelClickView(this.props.data)}}
            className=""
            style={{
              height: "auto",
              width: "30%",
              objectFit: "cover",
              scale: "0.7",
            }}
            src={imgJpg}
            alt
          />
          
        </a>
    );
  }
}
