import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import Customer1 from "../../assets/Customer/Customer1.png";
import "../../App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./style.css";

// import required modules
import { Pagination } from "swiper/modules";

export default function SwiperCom() {
  const testimonials = [
    {
      name: "William Smith",
      type: "Customer",
      commint:
        "أنا أحب خدماتهم وأستمتع بها. هذه أفضل منصةأنا أحب خدماتهم وأستمتع بها. هذه أفضل منصةخدماتهم وأستمتع بها. هذه أفضل منصةأنا أحب خدماتهم وأستمتع بها. هذه أفضل منصةأنا أحب خدماتهم وأستمتع بها. هذه أفضل منصة",
      image: Customer1,
      ratting: "4.9",
    },
    {
      name: "William Smith",
      type: "Customer",
      commint:
        "أنا أحب خدماتهم وأستمتع بها. هذه أفضل منصةأنا أحب خدماتهم وأستمتع بها. هذه أفضل منصةخدماتهم وأستمتع بها. هذه أفضل منصةأنا أحب خدماتهم وأستمتع بها. هذه أفضل منصةأنا أحب خدماتهم وأستمتع بها. هذه أفضل منصة",
      image: Customer1,
      ratting: "4.9",
    },
    {
      name: "William Smith",
      type: "Customer",
      commint:
        "أنا أحب خدماتهم وأستمتع بها. هذه أفضل منصةأنا أحب خدماتهم وأستمتع بها. هذه أفضل منصةخدماتهم وأستمتع بها. هذه أفضل منصةأنا أحب خدماتهم وأستمتع بها. هذه أفضل منصةأنا أحب خدماتهم وأستمتع بها. هذه أفضل منصة",
      image: Customer1,
      ratting: "4.9",
    },
    {
      name: "William Smith",
      type: "Customer",
      commint:
        "أنا أحب خدماتهم وأستمتع بها. هذه أفضل منصةأنا أحب خدماتهم وأستمتع بها. هذه أفضل منصةخدماتهم وأستمتع بها. هذه أفضل منصةأنا أحب خدماتهم وأستمتع بها. هذه أفضل منصةأنا أحب خدماتهم وأستمتع بها. هذه أفضل منصة",
      image: Customer1,
      ratting: "4.9",
    },
    {
      name: "William Smith",
      type: "Customer",
      commint:
        "أنا أحب خدماتهم وأستمتع بها. هذه أفضل منصةأنا أحب خدماتهم وأستمتع بها. هذه أفضل منصةخدماتهم وأستمتع بها. هذه أفضل منصةأنا أحب خدماتهم وأستمتع بها. هذه أفضل منصةأنا أحب خدماتهم وأستمتع بها. هذه أفضل منصة",
      image: Customer1,
      ratting: "4.9",
    },
    {
      name: "William Smith",
      type: "Customer",
      commint:
        "أنا أحب خدماتهم وأستمتع بها. هذه أفضل منصةأنا أحب خدماتهم وأستمتع بها. هذه أفضل منصةخدماتهم وأستمتع بها. هذه أفضل منصةأنا أحب خدماتهم وأستمتع بها. هذه أفضل منصةأنا أحب خدماتهم وأستمتع بها. هذه أفضل منصة",
      image: Customer1,
      ratting: "4.9",
    },
  ];
  return (
    <>
      <div className="flex h-full w-full justify-center items-center flex-col">
        <Swiper
          // slidesPerView={3}
          spaceBetween={10}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            900: { slidesPerView: 2 },
            1200: { slidesPerView: 3 },
          }}
          modules={[Pagination]}
          className="flex h-full w-full justify-center items-center bg-none  px-5   "
        >
          {testimonials.map((item, index) => (
            <SwiperSlide>
              <div className="testiCardMain rounded-3xl flex flex-col justify-between items-center">
                <div className="flex flex-row items-center justify-start w-full px-2 h-28  ">
                  <div>
                    <img
                      className="rounded-full customerImage"
                      src={item.image}
                      alt="customer"
                    />
                  </div>
                  <div className="flex flex-col justify-center items-start">
                    <p className="customerName">{item.name}</p>
                    <p className="customerType">{item.type}</p>
                  </div>
                </div>
                <div className="flex items-start justify-start h-56 px-2 ">
                  <p className="customerCommint">{item.commint}</p>
                </div>
                <div className="flex  items-end w-full justify-end h-16  ">
                  <p className="py-3 px-3 customerRatting">
                    <FontAwesomeIcon
                      icon="star"
                      style={{ color: "#ffd43b", marginRight: 5 }}
                    />
                    {item.ratting}
                  </p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
}
