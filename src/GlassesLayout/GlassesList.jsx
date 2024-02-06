import React, { Component } from "react";
import GlassesItem from "./GlassesItem";

export default class GlassesList extends Component {
  renderGlassesList = () => {
    return this.props.glassesArr.map((item) => {
      return (
        <GlassesItem key={item.id} data={item} handelClickView={this.props.handelViewDetail} />
      );
    });
  };
  render() {
    return <div className="divJpg m-5">{this.renderGlassesList()}</div>;
  }
}
