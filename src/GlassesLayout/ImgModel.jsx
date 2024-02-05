import React, { Component } from "react";

export default class ImgModel extends Component {
  render() {
    return (
      <div className="imgModel">
        <img
          style={{ width: "100%", position: "relative" }}
          src="./imageSrc/glassesImage/model.jpg"
          alt=""
        />
        {/* image kính */}
        <img
          style={{
            width: "50%",
            position: "absolute",
            top: "21%",
            left: "25%",
            opacity: "50%",
          }}
          // src="./imageSrc/glassesImage/v3.png"
          // cái state này sẽ được lấy từ prop truyền vào component này.
          src={this.props.srcProp}
          alt=""
        />

        <button className="btn-warning mr-4">Before</button>
        <button className="btn-warning">After</button>
      </div>
    );
  }
}
