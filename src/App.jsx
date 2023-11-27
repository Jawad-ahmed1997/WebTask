import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

import DisheCategories from "./components/categories";
import Footer from "./components/footer/Footer";
import MobApp from "./components/mobApp/MobApp";

import SwiperCom from "./components/Slider/slider";
import Header from "./components/navbar/Index";
import DishesMenu from "./components/dishesList";
import Testimonials from "./components/Slider/Index";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="">
        <Header />
        <MobApp />
        <DishesMenu />
        <DisheCategories />
        <Testimonials />
        <Footer />
      </div>
    </>
  );
}

export default App;
