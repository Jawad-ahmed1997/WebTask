import React from "react";
import "./style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationDot,
  faPhone,
  faEnvelopeOpen,
  faPaperPlane,
} from "@fortawesome/free-solid-svg-icons";
import { fb, insta, Tweter, logo } from "../../assets/Footer/index";

function Footer() {
  return (
    <div className="FooterMian flex-row  justify-center items-center grid xl:grid-cols-4 lg:grid-cols-4 md:grid-cols-2 sm:grid-col-1 ">
      <div className="h-full flex justify-center items-center md:grid-col-1 ">
        <img src={logo} />
      </div>
      <div className=" h-full pt-7 px-5 justify-center items-center">
        <h1 className="text-2xl FooterHeads">Address</h1>
        <div className="flex flex-row my-6 ">
          <FontAwesomeIcon
            className="mt-1"
            icon={faLocationDot}
            style={{ color: "#ffffff" }}
          />
          <p className="FooterText ml-5">
            Park Avenue South, New York, 74812, United States
          </p>
        </div>
        <div className="flex flex-row  my-6">
          <FontAwesomeIcon
            className="mt-1"
            icon={faEnvelopeOpen}
            style={{ color: "#ffffff" }}
          />
          <p className="FooterText  ml-5 ">contact@chefprive.com</p>
        </div>
        <div className="flex flex-row  my-6">
          <FontAwesomeIcon
            icon={faPhone}
            style={{ color: "#ffffff" }}
            className="mt-1"
          />
          <p className="FooterText  ml-5 ">000-123-456</p>
        </div>
        <div className="flex flex-row justify-start my-6">
          <p className="FooterText   ">FAQ</p>
          <p className="FooterText  ml-12 ">Contact</p>
        </div>
      </div>
      <div className=" h-full flex flex-col pt-7  px-5 md:justify-center md:items-center ">
        <h1 className="text-2xl FooterHeads">Links</h1>

        <div className="flex flex-row footerList my-6  ">
          <p className="FooterText ">Home</p>
        </div>
        <div className="flex flex-row  my-6">
          <p className="FooterText   ">How it works</p>
        </div>
        <div className="flex flex-row  my-6">
          <p className="FooterText   ">Our Chefs</p>
        </div>
        <div className="flex flex-row justify-start my-6">
          <p className="FooterText   ">Reviews</p>
        </div>
        <div className="flex flex-row justify-start my-6">
          <p className="FooterText   ">What’s new</p>
        </div>
      </div>
      <div className=" m serDiv h-full pt-7  px-5 ">
        <h1 className="text-2xl FooterHeads">Subcribe to Newsletter</h1>
        <div className="mt-5">
          <input
            type="text"
            placeholder="Enter Email"
            style={{ color: "red" }}
            className="emailinput py-2 px-2 rounded mr-2 "
          />
          <button className="sendIconBtn px-3 py-2 rounded-md">
            <FontAwesomeIcon icon={faPaperPlane} style={{ color: "#ffffff" }} />
          </button>
        </div>
        <div className="mt-20 flex justify-center flex-col">
          <p
            className="text-2xl"
            style={{ color: "#FFFFFF", lineHeight: "28.43px" }}
          >
            Our Social
          </p>
          <div className="flex flex-row my-5">
            <div className="flex flex-row">
              <img src={fb} className="mx-3" />
              <img src={insta} className="mx-3" />
              <img src={Tweter} className="mx-3" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
