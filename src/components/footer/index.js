import React from "react";
import "./style.css";
import hero from "../../assets/images/footer_logo.png";

export default class Footer extends React.Component {
  render() {

    return (
      <div className="footer">
          <div style={{backgroundImage: `url(${hero})`}}/>
      </div>
    );
  }
}