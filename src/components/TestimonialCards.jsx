import React from "react";
import Customer1 from "../assets/Customer/Customer1.png";
import "../App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function TestimonialCards() {
  const testimonials = [
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
    <div className="flex flex-row">
      {testimonials.map((item, index) => (
        <div className=" testiCardMain rounded-3xl flex flex-col justify-between items-center px-3 py-3">
          <div className="flex flex-row items-center justify-start w-full h-28  ">
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
          <div className="flex items-start justify-start h-56">
            <p className="customerCommint">{item.commint}</p>
          </div>
          <div className="flex  items-end w-full justify-end h-16  ">
            <p className="py-3 customerRatting">
              <FontAwesomeIcon
                icon="star"
                style={{ color: "#ffd43b", marginRight: 5 }}
              />
              {item.ratting}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default TestimonialCards;
