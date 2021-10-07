import React from "react";
import Carousel from "nuka-carousel";
import Slaide1 from "./slides/Slaide1";
import "./Carousel.css";
import catBtn from "./img/catBtn.svg";
import catBtn1 from "./img/catBtn1.svg";

export default class extends React.Component {
  state = {
    slideIndex: 0,
  };

  render() {
    return (
      <div className="carouselContainer">
        <div className="carousel">
          <Carousel
            slideIndex={this.state.slideIndex}
            afterSlide={(slideIndex) => this.setState({ slideIndex })}
          >
            <Slaide1 />
            <Slaide1 />
          </Carousel>
          <div className="catBtn">
            <button>
              <img src={catBtn} alt="{catBtn}" />
            </button>
            <button>
              <img src={catBtn1} alt="{catBtn1}" />
            </button>
            <button>
              <img src={catBtn1} alt="{catBtn1}" />
            </button>
            <button>
              <img src={catBtn1} alt="{catBtn1}" />
            </button>
            <button>
              <img src={catBtn1} alt="{catBtn1}" />
            </button>
          </div>
        </div>
      </div>
    );
  }
}
