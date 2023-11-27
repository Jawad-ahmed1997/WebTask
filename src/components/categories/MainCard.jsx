import React from "react";
import "./style.css";
import { Sub1, Sub2, Sub3, Sub4, main } from "../../assets/Categories";

const subCategory = [
  { image: Sub1, id: 1 },
  { image: Sub2, id: 2 },
  { image: Sub3, id: 3 },
  { image: Sub4, id: 4 },
];

function MainCard() {
  return (
    <>
      <div className="grid xl:grid-cols-2 lg:grid-cols-2 sm:grid-cols-1  ">
        <div className="mainCardDiv h-full  2xl:m-auto xl:m-auto lg:m-auto md:mx-auto md:my-auto">
          <img className="mainCardDivimg h-5/6 m-auto " src={main} />
        </div>

        <div className="flex flex-wrap justify-between ">
          {subCategory.map((item, ind) => (
            <div className=" " key={ind}>
              <img
                className="SubCardimg mx-2 my-4 xl:w-76  lg:w-72 md:w-56"
                src={item.image}
              />
            </div>
          ))}
        </div>
      </div>
      {/* 
      <div className="bg-green-100 w-full h-2/4 grid grid-cols-2">
        <div className="bg-blue-100 h-4/4 grid grid-rows-2">
          <div className="grid grid-cols-1">12</div>
          <div className="grid grid-cols-2">
            <div>1</div>
            <div>2</div>
          </div>
        </div>
        <div className="bg-blue-300 h-4/4">2</div>
      </div> */}
    </>
  );
}

export default MainCard;
