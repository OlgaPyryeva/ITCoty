import React from "react";
import Traineeship from "../traineeship/Traineeship";
import Vacancies from "../vacancies/Vacancies";
import Carousel from "./carousel/Carousel";
import News from "../news/News";
import Footer from "./footer/Footer";

export default function Home() {
  return (
    <div>
      <Carousel />
      <Vacancies />
      <Traineeship />
      <News />
      <Footer />
    </div>
  );
}
