import React from "react";
import AImg from "../../img/Vector.png";
import CloudImg from "../../img/Cloud-Computing.png";
import UserImg from "../../img/UX-Design.png";
import ProjectImg from "../../img/Project-management.png";
import DataImg from "../../img/learning-icon.png";
import CyberImg from "../../img/eye-icon.png";
import Image from "next/image";
import "./service.css";
const service = () => {
  return (
    <div className="">
      <div className="text-center">
        <h5 className="text-spanText text-textCustom font-semibold mb-2 ">
          OUR SERVICES
        </h5>
        <h1 className="text-2xl lg:text-3xl text-hireMe mb-8 font-fira font-medium">
          What we do
        </h1>
      </div>
      <div className="service flex flex-wrap justify-center relative z-10 gap-4">
        <div className="w-full p-4 md:w-[30%] m-2 border shadow-2xl bg-white">
          <div>
            <Image src={AImg} alt="AI and Machine Learning Integration" />
          </div>
          <h3 className="text-base font-fira mb-2">
            AI and Machine Learning Integration
          </h3>
          <p className="text-textCustom">
            Harness the potential of artificial intelligence and machine
            learning to automate processes, gain valuable insights, and make
            data-driven decisions. Our solutions are tailored to enhance
            efficiency and drive business success.
          </p>
        </div>

        <div className="w-full p-4 md:w-[30%] m-2 border shadow-2xl bg-white">
          <div>
            <Image src={CloudImg} alt="Cloud Computing Solutions" />
          </div>
          <h3 className="text-base font-fira mb-2">
            Cloud Computing Solutions
          </h3>
          <p className="text-textCustom">
            Take your business to new heights with our cloud computing services.
            We provide scalable and secure solutions on platforms like AWS,
            ensuring flexibility and reliability for your digital
            infrastructure.
          </p>
        </div>

        <div className="w-full p-4 md:w-[30%] m-2 border shadow-2xl bg-white">
          <div>
            <Image
              src={UserImg}
              alt="User Interface (UI) and User Experience (UX) Design"
            />
          </div>
          <h3 className="text-base font-fira mb-2">
            User Interface (UI) and User Experience (UX) Design
          </h3>
          <p className="text-textCustom">
            Design that Captivates and Engages: Transform user experiences with
            our cutting-edge UI/UX design services. From intuitive interfaces to
            immersive user journeys, we craft designs that captivate, engage,
            and elevate your brand.
          </p>
        </div>

        <div className="w-full p-4 md:w-[30%] m-2 border shadow-2xl bg-white">
          <div>
            <Image src={ProjectImg} alt="Project Management Solutions" />
          </div>
          <h3 className="text-base font-fira mb-2">
            Project Management Solutions
          </h3>
          <p className="text-textCustom">
            Ensure the security of your digital infrastructure with our
            comprehensive cybersecurity solutions. From threat intelligence to
            network security, we safeguard your business against evolving cyber
            threats.
          </p>
        </div>

        <div className="w-full p-4 md:w-[30%] m-2 border shadow-2xl bg-white">
          <div>
            <Image
              src={DataImg}
              alt="Data Analytics and Business Intelligence"
            />
          </div>
          <h3 className="text-base font-fira mb-2">
            Data Analytics and Business Intelligence
          </h3>
          <p className="text-textCustom">
            Unlock the power of data with our advanced analytics and business
            intelligence services. Visualize data, gain actionable insights, and
            make informed decisions that drive business growth.
          </p>
        </div>

        <div className="w-full p-4 md:w-[30%] m-2 border shadow-2xl bg-white">
          <div>
            <Image src={CyberImg} alt="Cybersecurity Solutions" />
          </div>
          <h3 className="text-base font-fira mb-2">Cybersecurity Solutions</h3>
          <p className="text-textCustom">
            Ensure the security of your digital infrastructure with our
            comprehensive cybersecurity solutions. From threat intelligence to
            network security, we safeguard your business against evolving cyber
            threats.
          </p>
        </div>
      </div>
    </div>
  );
};

export default service;
