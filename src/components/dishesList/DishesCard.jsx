import React from "react";
import Card1 from "../../assets/Card/Card1.png";
import Chef1 from "../../assets/Chef/Chef1.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./style.css";

function DishesCard() {
  const Dishes = [
    {
      image: Card1,
      title: "Menu Title Here",
      Price: 200,
      chef: {
        chefImage: Chef1,
        chefRating: 4.5,
        chefName: "Marriot Head Chef",
      },
    },
    {
      image: Card1,
      title: "Coffee",
      Price: 200,
      chef: {
        chefImage: Card1,
        chefRating: 4.5,
        chefName: "Marriot Head Chef",
      },
    },
  ];
  return (
    <>
      <div className="flex flex-row flex-wrap ">
        {Dishes.map((item) => (
          <div
            className=" w-96 mx-2  rounded-2xl my-2 "
            style={{
              height: "468px",
              backgroundColor: "#FFFFFF",
              boxShadow: "0px 30px 70px 0px #B0B0B040",
            }}
          >
            <img className="w-96" src={Card1} style={{ height: "267px" }} />
            <div className="flex justify-between flex-col mx-2">
              <div className="w-full flex flex-col items-start justify-around  h-32">
                <div className=" flex flex-col items-start justify-between ">
                  <h1
                    className="text-black text-center mb-2"
                    style={{ fontSize: "22px", lineHeight: "25.7px" }}
                  >
                    {item.title}
                  </h1>
                  <h1
                    className="text-lg text-black text-center"
                    style={{ lineHeight: "21.09px" }}
                  >
                    Pick{" "}
                    <span className="font-bold" style={{ color: "#FF9E2C" }}>
                      5
                    </span>{" "}
                    out of{" "}
                    <span className="font-bold" style={{ color: "#FF9E2C" }}>
                      10
                    </span>{" "}
                    dishes
                  </h1>
                </div>

                <h1
                  className=" font-bold text-center"
                  style={{ fontSize: "26px" }}
                >
                  {"QAR " + item.Price}
                </h1>
              </div>
              <div className="flex flex-row justify-between items-center  h-16 border-t-2 pt-4">
                <div className="flex flex-row justify-start items-center w-9/12 ">
                  <img
                    className="w-14 h-14 rounded-full"
                    src={item.chef.chefImage}
                  />
                  <p className="text-xl font-bold text-center ml-1">
                    {item.chef.chefName}
                  </p>
                </div>

                <p className="text-xl font-bold ">
                  <FontAwesomeIcon
                    icon="star"
                    style={{ color: "#ffd43b", marginRight: 5 }}
                  />
                  {item.chef.chefRating}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default DishesCard;
