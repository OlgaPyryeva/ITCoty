import React from "react";
import Carousel from "nuka-carousel";
import Slaide1 from "./slides/Slaide1";

export default class extends React.Component {
  state = {
    slideIndex: 0,
  };

  render() {
    return (
      <Carousel
        slideIndex={this.state.slideIndex}
        afterSlide={(slideIndex) => this.setState({ slideIndex })}
      >
        <Slaide1 />
        <Slaide1 />
      </Carousel>
    );
  }
}
