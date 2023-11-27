import React from "react";
import DishesCard from "./DishesCard";
import "./style.css";

function DishesMenu() {
  return (
    <div className="grid grid-cols-12 grid-flow-row w-full mt-48 mb-32 px-5 ">
      <div className="col-span-12 sm:col-span-12 md:col-span-3 lg:col-span-3 xl:col-span-3 2xl:col-span-3 grid-flow-col mb-5  ">
        <h1 className="DishlistHead ">
          Our Most <span className="specail"> Popular Dishes</span> This Month
        </h1>
        <button
          className="seeAllbtn rounded-lg px-4 pv-3 mt-2"
          style={{ backgroundColor: "#FF9E2C" }}
        >
          See all
        </button>
      </div>
      <div className=" col-span-12 sm:col-span-12 md:col-span-9 lg:col-span-9 xl:col-span-9 2xl:col-span-9 grid-flow-row">
        <DishesCard />
      </div>
    </div>
  );
}

export default DishesMenu;
