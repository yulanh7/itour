import React, { Component } from 'react';
import Slider from "react-slick";
import './style.css';


function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "red" }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "green" }}
      onClick={onClick}
    />
  );
}

class Intro extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      Arrows:true,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />

    };
    return (
      <div>
        <Slider {...settings}>
          <div className="home-slider" id="h-slider1" >
            <h3 style={{fontSize:"30px"}}>1</h3>
          </div>
          <div className="home-slider" id="h-slider2" >
            <h3 style={{fontSize:"30px"}}>2</h3>
          </div>
          <div className="home-slider" id="h-slider3" >
            <h3 style={{fontSize:"30px"}}>3</h3>
          </div>
        </Slider>
      </div>
    );
  }
}

export default Intro;
