import React from "react";
import Vacancies from "../vacancies/Vacancies";
import Carousel from "./carousel/Carousel";
import NavBar from "./navbar/NavBar";

export default function Home() {
  return (
    <div>
      <NavBar />
      <Carousel />
      <Vacancies />
    </div>
  );
}
