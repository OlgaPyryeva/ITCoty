import React, { useState } from "react";
import Carousel from "@brainhubeu/react-carousel";
import "@brainhubeu/react-carousel/lib/style.css";
import imageOne from "./img/imgOne.svg";

const MyCarousel = () => {
  const [value, setValue] = useState(0);
  const onChange = (value) => {
    setValue(value);
  };

  return (
    <div>
      <h1>Удобный поиск стажировок и вакансий в IT</h1>
      <div>
        Краткий текст с описанием преимуществ ресурса, предложение, от которого
        невозможно отказаться{" "}
      </div>
      <button>Подробнее</button>
      <Carousel value={value} onChange={onChange}>
        <img src={imageOne} />
      </Carousel>
    </div>
  );
};

export default MyCarousel;
