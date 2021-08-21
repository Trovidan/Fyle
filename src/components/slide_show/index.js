/* eslint-disable no-useless-constructor */
import clsx from "clsx";
import React from "react";
import "./style.css";
import {
  default_pre_heading,
  default_main_heading,
  slideShow
} from "./utils";

export default class SlideShow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active: 0
    }
  }

  render() {

    let pre_heading = this.props.pre_heading
      ? this.props.pre_heading
      : default_pre_heading;
    let main_heading = this.props.main_heading
      ? this.props.main_heading
      : default_main_heading;
    let slideshow = this.props.slide_show ? this.props.slide_show : slideShow;

    return (
      <div className="slide-show-container">
        <h5>{pre_heading}</h5>
        <h2>{main_heading}</h2>
        <div className="slide-show-content">
          <div className="slide-show-image-container">
            {slideshow.map((e, index) => {
              return (
                <div
                  key={index}
                  className={clsx(index === this.state.active && "active")}
                  style = {{backgroundImage: `url(${e.image})`}}
                />
              );
            })}
          </div>
          <div className="slide-show-toggle-container">
            {slideshow.map((e, index) => {
              return (
                <div
                  key={index}
                  className={clsx(index === this.state.active && "active")}
                  onClick={()=>{this.setState({...this.state, active: index})}}
                >
                  <h3>{e.title}</h3>
                  <p>{e.body}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}