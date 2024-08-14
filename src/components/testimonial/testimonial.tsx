import Image from "next/image";
import React from "react";
import Dp1 from "../../img/facecard1.png";
import Dp2 from "../../img/facecard2.png";
import Polygon from "../../img/Polygon1.png";
import Star from "../../img/star.png";

const Testimonial = () => {
  return (
    <div className="bg-tmoBg py-8 mt-12">
      <div className="text-center mb-8">
        <h5 className="text-spanText text-textCustom font-semibold mb-2">
          TESTIMONIALS
        </h5>
        <h1 className="text-2xl lg:text-3xl text-tmotext mb-8 font-fira font-medium">
          What our client{"'"}s Say
        </h1>
      </div>
      <div className="flex justify-between space-x-8 px-32">
        <div className="bg-white p-4 w-1/2 relative">
          <div className="absolute right-0 transform translate-y-[-50%] top-0">
            <Image src={Dp1} alt="IBT REAL ESTATE" style={{ width: "100%" }} />
          </div>
          <div className="absolute left-[-1rem]">
            <Image src={Polygon} alt="" />
          </div>
          <div className="">
            <div className="global bg-black text-white absolute left-[-1rem] transform translate-y-[-45%] top-0 rounded-tr-full py-2 px-8">
              <h1 className="font-bold font-fira text-textCustom">
                IBT REAL ESTATE
              </h1>
              <p className="text-custom font-fira">Review</p>
              <Image src={Star} alt="Star Rating" style={{ width: "12%" }} />
            </div>

            <h1 className="text-sm mt-4 font-bold text-center font-fira text-tmotext">
              Sophia Rodriguez
            </h1>
            <h4 className="text-center font-medium font-fira text-textCustom">
              Realtor
            </h4>
            <p className="mt-2 font-fira text-pTmotext text-sm">
              QuantumTech{"'"}s solutions have revolutionized the way we conduct
              business. The increase in operational efficiency has allowed us to
              focus more on strategic initiatives, ultimately contributing to
              our business growth.
            </p>
          </div>
        </div>
        <div className="bg-white p-4 w-1/2 relative">
          <div className="absolute right-0 transform translate-y-[-50%] top-0">
            <Image
              src={Dp2}
              alt="GLOBAL STANDS LTD"
              style={{ width: "100%" }}
            />
          </div>
          <div className="absolute left-[-1rem] ">
            <Image src={Polygon} alt="" />
          </div>
          <div className="">
            <div className="global bg-black text-white absolute left-[-1rem] px-8 py-2 transform translate-y-[-40%] top-0 rounded-tr-full">
              <h1 className="font-bold font-fira text-textCustom">
                GLOBAL STANDS LTD
              </h1>
              <p className="text-custom font-fira">Review</p>
              <Image src={Star} alt="Star Rating" style={{ width: "12%" }} />
            </div>

            <h1 className="text-sm mt-4 font-bold text-center font-fira text-tmotext">
              Jayce Roque
            </h1>
            <h4 className="text-center font-medium font-fira text-textCustom">
              Creative Director
            </h4>
            <p className="mt-2 font-fira text-pTmotext text-sm">
              In our pursuit of digital transformation, QuantumTech has been a
              key partner. Their innovative BusinessTech solutions have not only
              met but exceeded our expectations, providing the technological
              edge needed in today{"'"}s competitive business landscape.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
