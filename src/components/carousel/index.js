/* eslint-disable jsx-a11y/anchor-has-content */
import React from "react";
import "./style.css";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import right_arrow from '../../assets/icons/arrow.svg'
import {
  default_pre_heading,
  default_main_heading,
  default_para_text,
  carousel,
} from "./utils";

const redirect_id = "redirect_to_fyle";
const redirect_link = "https://www.fylehq.com";

export default class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.redirect = this.redirect.bind(this);
  }
  redirect(){
    document.getElementById(redirect_id).click();
  }
  render() {
    let pre_heading = this.props.pre_heading
      ? this.props.pre_heading
      : default_pre_heading;
    let main_heading = this.props.main_heading
      ? this.props.main_heading
      : default_main_heading;
    let para_text = this.props.para_text
      ? this.props.para_text
      : default_para_text;

    return (
      <div className="carousel-container">
        <div className="carousel-text">
          <div className="carousel-text-headers">
            <h5>{pre_heading}</h5>
            <h2>{main_heading}</h2>
          </div>
          <div className="carousel-text-para">
            <p>{para_text}</p>
          </div>
        </div>
        <div className="carousel-content">
          <div>
            <OwlCarousel
              className="owl-theme"
              dots
              items={4}
              startPosition={`fair-carousel-0`}
              margin={0}
              mouseDrag
              touchDrag
              autoplay
              loop
              autoplayTimeout={4000}
              autoplaySpeed={1000}
              autoplayHoverPause
              dotClass="carousel-dot owl-dot"
            >
              {carousel.map((e, index) => (
                <div className="carousel-item-container" key = {index}>
                  <div
                    className="carousel-item-background"
                    style={{ backgroundImage: `url(${e.image})` }}
                  />
                  <div className="carousel-item-content">
                    <div
                      className="svg"
                      style={{ backgroundImage: `url(${e.svg})` }}
                    />
                    <h1>{e.title}</h1>
                    <p>{e.body}</p>
                    <button onClick={this.redirect}>
                      Read More
                      <div
                        className="carousel-btn-svg"
                        style={{ backgroundImage: `url(${right_arrow})` }}
                      />
                    </button>
                  </div>
                </div>
              ))}
            </OwlCarousel>
          </div>
        </div>
        <a
          id={redirect_id}
          href={redirect_link}
          target="_blank"
          rel="noopener noreferrer"
        />
      </div>
    );
  }
}