import { Slider } from "@material-tailwind/react";
import React from "react";
import SwiperCom from "./slider";
import "./style.css";

function Testimonials() {
  return (
    <div className="mb-10">
      <div className="flex h-full  xl:w-1/4 lg:w-1/4 md:w-2/4 sm:w-3/4 justify-center items-center flex-col mb-10">
        <h1 className="DishlistHead pl-10 ">
          What our<span className="specail"> Customer</span> Says
        </h1>
      </div>
      <SwiperCom />
    </div>
  );
}

export default Testimonials;
