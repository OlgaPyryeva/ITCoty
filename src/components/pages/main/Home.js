import React from "react";
import Traineeship from "../traineeship/Traineeship";
import Vacancies from "../vacancies/Vacancies";
import Carousel from "./carousel/Carousel";

export default function Home() {
  return (
    <div>
      <Carousel />
      <Vacancies />
      <Traineeship />
    </div>
  );
}
