import React from "react";
import LaptopImg from "../../img/laptop.png";
import Fb from "../../img/facebook.png";
import IG from "../../img/instagram.png";
import Twitter from "../../img/twitter.png";
import Image from "next/image";

const Deal = () => {
  return (
    <div className="relative">
      {/* Main Content Section */}
      <div className="flex justify-between p-8 md-6">
        <div>
          <h5 className="text-spanText text-textCustom font-semibold mb-2">
            LET’S SHAPE YOUR BUSINESS
          </h5>
          <h1 className="text-2xl lg:text-3xl text-hireMe mb-8 font-fira font-medium">
            Ready to Transform Your <br /> Business with QuantumTech?
          </h1>
          <p className="text-base font-fira font-normal">
            At QuantumTech, we <br />
            are pioneering a new era of <br />
            possibilities for your business. Embrace the <br />
            future of technology, where innovation meets <br /> excellence.
          </p>
          <div className="pt-10">
            <a
              href="#hire"
              className="bg-hireMe text-white font-bold h-hire-btn w-hire-btn py-3 text-center px-10 text-base"
            >
              Start a deal
            </a>
          </div>
        </div>
        <div className="w-1/2 flex items-end justify-end">
          <Image src={LaptopImg} alt="" style={{ width: "85%" }} />
        </div>
      </div>

      {/* Subscription Section */}
      <div className="absolute inset-x-0 top-1/2 bg-hireMe flex justify-between items-center p-6 z-10 m-6">
        <div className="font-fira text-white max-w-md">
          <h1 className="text-lg font-bold">
            Subscribe to Quantum Tech <br /> Newsletter
          </h1>
          <p className="text-textCustom mt-2">
            Stay Ahead with the Latest in Technology, Innovation, and tips to
            grow your business.
          </p>
        </div>
        <div className="flex items-center justify-between bg-white p-1 w-1/2">
          <input
            type="text"
            className="outline-none text-textCustom h-hire-btn px-4 rounded-l-md"
            placeholder="Enter your email"
          />
          <a
            href="#hire"
            className="bg-hireMe text-white h-hire-btn py-3 px-6 text-textCustom"
          >
            Subscribe
          </a>
        </div>
      </div>

      {/* Footer Section */}
      <div className="bg-footerBg text-white text-textCustom mt-24 ">
        <div className="flex space-x-10 pt-20 pl-52">
          <div>
            <p className="font-semibold pb-2">Quick Links</p>
            <ul>
              <a href="">
                <li className="font-normal">Home</li>
              </a>
              <a href="">
                <li className="font-normal">About Us</li>
              </a>
              <a href="">
                <li className="font-normal">Contact us</li>
              </a>
            </ul>
          </div>
          <div>
            <p className="font-semibold pb-2">Legal</p>
            <ul>
              <a href="">
                <li className="font-normal">Privacy Policy</li>
              </a>
              <a href="">
                <li className="font-normal">Terms and Conditions</li>
              </a>
            </ul>
          </div>
          <div>
            <p className="font-semibold pb-2">Careers</p>
            <ul>
              <a href="">
                <li className="font-normal">Explore Opportunities</li>
              </a>
            </ul>
          </div>
        </div>
        <div className="flex flex-col items-end w-full pr-8 pb-4 pt-6">
          <h4 className="text-right">Connect With Us</h4>
          <div className="flex space-x-6 pt-2">
            <div>
              <Image src={IG} alt="Instagram" style={{ width: "100%" }} />
            </div>
            <div>
              <Image src={Fb} alt="Facebook" style={{ width: "100%" }} />
            </div>
            <div>
              <Image src={Twitter} alt="Twitter" style={{ width: "100%" }} />
            </div>
          </div>
        </div>

        <hr style={{ border: "1px solid #ccc", marginBottom: "10px" }} />
        <p className="pt-4 pb-6 px-8">
          &copy; 2023 QuantumTech Innovations. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Deal;
