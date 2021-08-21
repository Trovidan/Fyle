/* eslint-disable no-useless-constructor */
import React from "react";
import Carousel from "../../components/carousel";
import ContactUs from "../../components/contact_us";
import { growth, review, why_us } from "./utility";
import CountUp from "react-countup";
import "./style.css";
import SlideShow from "../../components/slide_show";
import Footer from "../../components/footer";
import quote_left from "../../assets/icons/Quotemarks-left.svg";

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.render_why_us = this.render_why_us.bind(this);
    this.render_growth = this.render_growth.bind(this);
    this.render_review = this.render_review.bind(this);
  }

  render_why_us(){
    return (
      <div className="home-banner-container">
        <h5>Why choose Us</h5>
        <h2>Why we are best</h2>
        <div className="home-why-us-content">
          {why_us.map((e, index) => (
            <div className="home-why-us-item" key={index}>
              <div
                className="svg"
                style={{ backgroundImage: `url(${e.svg})` }}
              />
              <h3>{e.title}</h3>
              <p>{e.body}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }

  render_growth(){
    return (
      <div className="home-banner-container">
        <h5>experts growth</h5>
        <h2>our company growth</h2>
        <div className="home-why-us-content">
          {growth.map((e, index) => (
            <div className="home-growth-item" key={index}>
              <div
                className="svg"
                style={{ backgroundImage: `url(${e.svg})` }}
              />
              <CountUp end={e.count} duration={4} suffix=" +" delay={0}>
                {({ countUpRef }) => (
                  <div className = "title">
                    <span ref={countUpRef} />
                  </div>
                )}
              </CountUp>
              <p>{e.body}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }

  render_review(){
    return (
      <div className="home-banner-container white">
        <h5>experts growth</h5>
        <h2>our company growth</h2>
        <div className="review-content">
          <div className="svg" style={{backgroundImage: `url(${quote_left})`}}/>
          <p>{review.body}</p>
          <div>
            <h1>{review.author}</h1>
            <span>{` - ${review.position}`}</span>
          </div>
        </div>
      </div>
    );
  }
  render() {
    return (
      <>
        <ContactUs />
        <Carousel />
        {this.render_why_us()}
        <SlideShow/>
        {this.render_growth()}
        {this.render_review()}
        <Footer/>
      </>
    );
  }
}