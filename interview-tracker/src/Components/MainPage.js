import React, { Component } from "react";
import ball from "./ball.png";

class MainPage extends Component {
  render() {
    return (
      <div className="MainPage">
        <p
          style={{
            marginLeft: "490px",
            marginTop: "60px",
            fontFamily: "impact",
          }}
        >
          Recruiting features
        </p>
        <div
          className="PictureMainPage"
          style={{
            height: "200px",
            width: "400px",
            backgroundColor: "#1876db",
            marginLeft: "360px",
            marginTop: "50px",
            marginBottom: "50px",
            borderRadius: "30px",
          }}
        >
          <img
            src={ball}
            style={{
              height: "90%",
              width: "auto",
              marginLeft: "30%",
              marginTop: "15px",
            }}
          ></img>
        </div>

        <br />
      </div>
    );
  }
}

export default MainPage;
