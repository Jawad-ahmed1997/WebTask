import React from "react";
import MainCard from "./MainCard";
import SubCard from "./SubCard";

function DisheCategories() {
  return (
    <div className="flex flex-col" style={{ backgroundColor: "#F8F8F8" }}>
      <div className="flex flex-col justify-start items-start sm:w-full   md:w-3/4 xl:w-3/4 lg:w-3/4 ">
        <h1 className="DishlistHead ml-5 my-5">
          Browse By<span className="specail"> Categories</span>
        </h1>
      </div>
      <div>
        <MainCard />
      </div>
    </div>
  );
}

export default DisheCategories;
