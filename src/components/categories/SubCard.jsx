import React from "react";
import "./style.css";
import { Sub1, Sub2, Sub3, Sub4 } from "../../assets/Categories";

const subCategory = [
  { image: Sub1, id: 1 },
  { image: Sub2, id: 2 },
  { image: Sub3, id: 3 },
  { image: Sub4, id: 4 },
];

function SubCard() {
  return (
    <div className="flex flex-row flex-wrap justify-evenly ">
      {subCategory.map((item, ind) => (
        <div className=" mx-4 my-4" key={ind}>
          <img className="SubCardimg" src={item.image} />
        </div>
      ))}
    </div>
  );
}

export default SubCard;
