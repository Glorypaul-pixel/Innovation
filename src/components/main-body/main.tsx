import React from "react";
import "./main.css";
import BackgroundImg from "../../img/bg.png";
import Image from "next/image";
const main = () => {
  return (
    <div className="innovation text-black">
      <div className="innovation-content flex flex-col md:flex-row items-center justify-between p-4">
        <div className="text-content md:w-1/2 w-full p-4">
          <div className="block text-base font-semibold mb-4 text-spanText">
            WELCOME TO THE FUTURE OF INNOVATIONS
          </div>
          <h1 className="text-3xl font-medium mb-4 text-hireMe font-fira">
            Empowering Businesses with <br /> the Quantum Tech Advantage.
          </h1>
          <p className="leading-relaxed text-2x font-fira">
            At Quantum Tech Innovations, we{"'"}re pioneers in <br /> pushing
            the boundaries of technology. Our <br />
            futuristic solutions are designed to positively <br />
            transform your business, bringing innovation to <br />
            the forefront. Join us on a journey where <br />
            possibilities are limitless, and the future is now.
          </p>
        </div>
        <div className="image-content md:w-1/2 w-full p-4">
          <Image
            src={BackgroundImg}
            alt="Background image"
            className="w-full h-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default main;
