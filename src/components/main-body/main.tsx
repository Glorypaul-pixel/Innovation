import React from "react";
import "./main.css";
import BackgroundImg from "../../img/bg.png";
import OverImg from "../../img/img.png";
import Box from "../../img/box.png";
import Image from "next/image";

const Main: React.FC = () => {
  return (
    <div className="innovation text-black relative">
      <div className="innovation-content flex flex-col md:flex-row items-center justify-between p-4 w-full">
        <div className="text-content w-full md:w-1/2 p-4">
          <div className="block text-textCustom font-semibold mb-2 text-spanText font-inter">
            WELCOME TO THE FUTURE OF INNOVATIONS
          </div>
          <h1 className="text-3xl lg:text-3xl leading-9 font-medium mb-3 text-hireMe font-fira">
            Empowering Businesses with <br /> the Quantum Tech Advantage.
          </h1>
          <p className="leading-relaxed text-lg lg:text-lg font-fira">
            At Quantum Tech Innovations, we{"'"}re pioneers in <br /> pushing
            the boundaries of technology. Our <br />
            futuristic solutions are designed to positively <br />
            transform your business, bringing innovation to <br />
            the forefront. Join us on a journey where <br />
            possibilities are limitless, and the future is now.
          </p>
          <div className="pt-8">
            <a
              href="#hire"
              className="bg-hireMe text-white font-bold h-hire-btn w-hire-btn py-3 text-center px-10 text-base"
            >
              Explore Our Innovations
            </a>
          </div>
        </div>
        <div className="image-content w-full md:w-1/2 p-4 relative">
          <Image
            src={BackgroundImg}
            alt="Background image"
            className="h-auto relative z-10"
            style={{ width: "100%" }}
          />
          <Image
            src={Box}
            alt="Box image"
            className="absolute bottom-28 left-9 lg:bottom-24 lg:left-8 z-0 transform -translate-x-1/2"
          />
          <Image
            src={OverImg}
            alt="Overlay image"
            className="absolute inset-0 z-20 top-36 left-20 w-full h-full object-contain"
            style={{ width: "85%" }}
          />
        </div>
      </div>
    </div>
  );
};

export default Main;
