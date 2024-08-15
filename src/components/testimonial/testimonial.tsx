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
        <h5 className="text-spanText text-textCustom font-semibold mb-2 font-inter">
          TESTIMONIALS
        </h5>
        <h1 className="text-3xl lg:text-3xl text-tmotext mb-16 font-fira font-medium pb-10">
          What our client{"'"}s Say
        </h1>
      </div>
      <div className="flex justify-between space-x-12 px-32">
        
        <div className="relative w-1/2">
          <div className="absolute left-[-1.6rem] top-7 z-10">
            <Image src={Polygon} alt="Polygon Background" />
          </div>
          <div className="bg-white p-4 flex-1 z-20  mainDiv relative">
            <div className="absolute right-0 transform translate-y-[-50%] top-0 z-30">
              <Image
                src={Dp1}
                alt="IBT REAL ESTATE"
                // style={{ width: "100%" }}
              />
            </div>
           
            <div className="global bg-moniaBg text-white absolute left-[-1.7rem]  transform translate-y-[-40%] top-0 rounded-tr-full z-30">
              <div className="pl-6 pr-20 pt-2">
                <h1 className="font-bold font-fira text-textCustom">
                  IBT REAL ESTATE
                </h1>
                <p className="text-custom font-fira">Review</p>
              </div>

              <div className="flex items-end justify-end w-full px-2 pb-2">
                <Image src={Star} alt="Star Rating" style={{ width: "30%" }} />
              </div>
            </div>

            <h1 className="text-base mt-4 font-bold text-center font-fira text-tmotext pt-3">
              Sophia Rodriguez
            </h1>
            <h4 className=" pb-2 text-center font-medium font-fira text-textCustom">
              Realtor
            </h4>
            <p className="mt-2 font-fira text-pTmotext text-base">
              QuantumTech{"'"}s solutions have revolutionized the way we conduct
              business. The increase in operational efficiency has allowed us to
              focus more on strategic initiatives, ultimately contributing to
              our business growth.
            </p>
          </div>
        </div>


        <div className="relative w-1/2">
          <div className="absolute left-[-1.6rem] top-7 z-10">
            <Image src={Polygon} alt="Polygon Background" />
          </div>
          <div className="bg-white p-4 z-20  mainDiv relative ">
            <div className="absolute right-0 transform translate-y-[-50%] top-0 z-30">
              <Image
                src={Dp2}
                alt="GLOBAL STANDS LTD"
                // style={{ width: "100%" }}
              />
            </div>
            <div className="global bg-moniaBg text-white absolute left-[-1.6rem]  transform translate-y-[-40%] top-0 rounded-tr-full z-30">
              <div className="pl-6 pr-20 pt-2">
                <h1 className="font-bold font-fira text-textCustom">
                  GLOBAL STANDS LTD
                </h1>
                <p className="text-custom font-fira">Review</p>
              </div>

              <div className="flex items-end justify-end w-full px-2 pb-2">
                <Image src={Star} alt="Star Rating" style={{ width: "30%" }} />
              </div>
            </div>

            <h1 className="text-base mt-4 font-bold text-center font-fira text-tmotext pt-3">
              Jayce Roque
            </h1>
            <h4 className="text-center font-medium font-fira text-textCustom pb-2">
              Creative Director
            </h4>
            <p className="mt-2 font-fira text-pTmotext text-base">
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
