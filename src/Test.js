import React, { Component } from "react";
import Swipeable from "react-swipeable";
import styled from "styled-components";

const LeftContainer = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
`;

export class Test extends Component {
  left = React.createRef();
  leftHeader = React.createRef();
  middle = React.createRef();
  right = React.createRef();
  rightHeader = React.createRef();

  cellWidth = 60;

  state = {
    x: 0,
    y: 0
  };

  componentDidMount() {
    this.left.current.scrollLeft =
      this.cellWidth * 20 - this.left.current.clientWidth;
  }

  renderHeaderColumn = () => {
    return [...Array(20).keys()].map(x => (
      <div key={x}>Column {x.toString().padStart(2, "0")}</div>
    ));
  };

  renderData() {
    return [...Array(222).keys()].map(x => (
      <div key={x}>
        {[...Array(20).keys()].map(y => (
          <div
            key={y}
            style={{
              display: "inline-block",
              width: `${this.cellWidth}px`,
              border: "1px solid black",
              boxSizing: "border-box"
            }}
          >
            {x},{y}
          </div>
        ))}
      </div>
    ));
  }

  render() {
    return (
      <Swipeable
        onSwiping={(e, deltaX, deltaY) => {
          console.log("swiping");
          const { x, y } = this.state;
          this.left.current.scrollTop = y + deltaY;
          this.right.current.scrollTop = y + deltaY;
          this.middle.current.scrollTop = y + deltaY;

          console.log(this.cellWidth * 20 - x - deltaX);
          this.left.current.scrollLeft =
            this.cellWidth * 20 - this.left.current.clientWidth - x - deltaX;
          this.right.current.scrollLeft = x + deltaX;

          // debugger;
        }}
        onSwiped={() => {
          const x = this.right.current.scrollLeft;
          const y = this.right.current.scrollTop;
          this.setState({ x: x, y: y });
        }}
        style={{
          width: "80vw",
          height: "80vh",
          background: "#3e3e3e",
          margin: "0 auto",
          display: "flex"
        }}
      >
        <div
          ref={this.left}
          style={{
            width: "43%",
            height: "100%",
            overflow: "hidden"
          }}
          id="asd"
        >
          <div
            style={{
              width: `${this.cellWidth * 20}px`,
              backgroundImage: "linear-gradient(to bottom , red , yellow)",
              direction: "rtl"
            }}
          >
            {this.renderData()}
          </div>
        </div>
        <div
          ref={this.middle}
          style={{
            width: "14%",
            height: "100%",
            overflow: "hidden"
          }}
        >
          <div
            style={{
              width: "100%"
            }}
          >
            {[...Array(222).keys()].map(x => (
              <div
                key={x}
                style={{
                  textAlign: "center",
                  border: "1px solid black",
                  width: "100%",
                  boxSizing: "border-box"
                }}
              >
                {x}
              </div>
            ))}
          </div>
        </div>
        <div
          ref={this.right}
          style={{
            width: "43%",
            height: "100%",
            overflow: "hidden"
          }}
        >
          <div
            style={{
              width: `${this.cellWidth * 20}px`
            }}
          >
            {this.renderData()}
          </div>
        </div>
      </Swipeable>
    );
  }
}

export default Test;
