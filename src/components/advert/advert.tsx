import React from "react";
import PowerBi from "../../img/power-bi.png";
import Tensor from "../../img/power-bi.png";
import Figma from "../../img/figma.png";
import Webflow from "../../img/webflow.png";
import Image from "next/image";
const advert = () => {
  return (
    <div className="bg-advertBg flex items-center justify-center mb-8 p-6 space-x-32">
      <div>
        <Image src={Figma} alt="" className="w-full" />
      </div>
      <div>
        <Image src={Tensor} alt="" className="w-full" />
      </div>
      <div>
        <Image src={Webflow} alt="" className="w-full" />
      </div>
      <div>
        <Image src={PowerBi} alt="" className="w-full" />
      </div>
    </div>
  );
};

export default advert;
