import React from "react";
import "./style.css";
import {
  main,
  backRound,
  pizza,
  mob,
  iceCream,
  googlePlay,
  apple,
} from "../../assets/MobApp/index";

function MobApp() {
  return (
    <div className="main flex justify-center items-center mt-10">
      <img
        src={mob}
        className="mob 2xl:w-96 xl:w-80 lg:w-64 md:w-48 sm:w-36 w-36 "
      />
      <img
        src={iceCream}
        className="iceCream 2xl:w-96 xl:w-80 lg:w-64 md:w-48 sm:w-36 w-36"
      />
      <img
        src={pizza}
        className="pizza 2xl:w-60 xl:w-60 lg:w-64 md:w-48 sm:w-36 w-36"
      />
      <img
        src={backRound}
        className="backRound 2xl:w-36 2xl:h-36 xl:w-36 lg:w-36 md:w-36 sm:h-10 sm:w-10 h-10 w-10"
      />

      <div className="flex justify-center items-center flex-col">
        <h1 className="z-50 font-bold">Download our Mobile App</h1>
        <div className="flex flex-row my-10 justify-center items-center">
          <div className="ml-28">
            <img
              src={googlePlay}
              className="2xl:w-64 2xl:h-20 xl:h-20 xl:w-64 lg:w-64 lg:h-20 md:w-36 md:h-18 sm:h-10 sm:w-20  h-10 w-20"
            />
          </div>
          <div>
            <img
              src={apple}
              className="2xl:w-64 2xl:h-20 xl:h-20 xl:w-64 lg:w-64 lg:h-20 md:w-36 md:h-18 sm:h-10 sm:w-20  h-10 w-20"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default MobApp;
