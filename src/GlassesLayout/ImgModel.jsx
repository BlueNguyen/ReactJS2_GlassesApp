
import React, { Component } from "react";

export default class ImgModel extends Component {
  state = {
    showModel: false,
  };

  handleBeforeClick = () => {
    this.setState({ showModel: true });
  };

  handleAfterClick = () => {
    this.setState({ showModel: false });
  };

  render() {
    const { detail } = this.props;

    return (
      <div className="imgModel">
        {this.state.showModel ? (
          // Nếu showModel là true, hiển thị hình ảnh của mô hình
          <img
            style={{ width: "100%", position: "relative" }}
            src="./imageSrc/glassesImage/model.jpg"
            alt=""
          />
        ) : (
          // Ngược lại, hiển thị hình ảnh của kính
          <div>
            <img
              style={{ width: "100%", position: "relative" }}
              src="./imageSrc/glassesImage/model.jpg"
              alt=""
            />
            {/* image kính */}
            <div>
              <img
                style={{
                  width: "50%",
                  position: "absolute",
                  top: "21%",
                  left: "25%",
                  opacity: "50%",
                }}
                src={detail.url}
                alt=""
              />
              <div
                className={
                  Object.keys(detail).length === 0 ? "p-3" : "p-3 descText"
                }
                style={{ width: "94%", position: "absolute", bottom: "10%" }}
              >
                {Object.keys(detail).length !== 0 && (
                  <>
                    <h4 className="text-primary">{detail.name}</h4>
                    <p>{detail.desc}</p>
                  </>
                )}
              </div>
            </div>
          </div>
        )}

        <button className="btn-warning mr-4" onClick={this.handleBeforeClick}>
          Before
        </button>
        <button className="btn-warning" onClick={this.handleAfterClick}>
          After
        </button>
      </div>
    );
  }
}

