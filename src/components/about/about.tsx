import React from "react";
import Arrow from "../../img/arrow1.png";
import Image from "next/image";
import GroupImg from "../../img/group-people.png";
import HandsImg from "../../img/hands.png";
import TLeadImg from "../../img/about.png";
// import Fqoute from "../../img/qoute1.png";
// import Bqoute from "../../img/qoute2.png";

const About: React.FC = () => {
  return (
    <div className="p-8">
      <div className="text-center">
        <h5 className="text-spanText text-textCustom font-semibold mb-2 font-inter">
          About Us
        </h5>
        <h1 className="text-3xl lg:text-3xl text-hireMe mb-8 font-fira font-medium">
          Who We Are
        </h1>
      </div>

      <div className="flex flex-wrap justify-center font-fira font-normal">
        <div className="flex flex-col items-start w-full md:w-1/3 pr-10">
          <div className="flex items-center mb-4">
            <Image src={Arrow} alt="Arrow Icon" className="w-8 h-8" />
          </div>
          <h3 className="text-xl font-fira mb-2">Our Mission</h3>
          <p className="text-textCustom">
            At QuantumTech, our mission is to drive transformative change in the
            business landscape. We are committed to providing businesses with
            the technological edge they need to navigate complexities, enhance
            efficiency, and achieve their strategic objectives.
          </p>
        </div>
        <div className="flex flex-col items-start w-full md:w-1/3 pr-10">
          <div className="flex items-center mb-4">
            <Image src={Arrow} alt="Arrow Icon" className="w-8 h-8" />
          </div>
          <h3 className="text-xl font-fira mb-2">Our Vision</h3>
          <p className="text-textCustom">
            Our vision is to be at the forefront of this evolution, leading
            businesses into an era of unparalleled innovation, efficiency, and
            sustainable growth. Our guiding principles are Innovation Beyond
            Boundaries, Empowering Business Excellence, and Sustainability
            through Technology.
          </p>
        </div>
        <div className="flex flex-col items-start w-full md:w-1/3 pr-10">
          <div className="flex items-center mb-4">
            <Image src={Arrow} alt="Arrow Icon" className="w-8 h-8" />
          </div>
          <h3 className="text-xl font-fira mb-2">Our Core Values</h3>
          <p className="text-textCustom">
            Our core values are Innovation, Integrity, Collaboration, and
            Customer Success. Your success is our success. We thrive on
            exploring the uncharted territories of technology, driving
            innovation in every solution we deliver. We measure our achievements
            by the impact we create for our clients.
          </p>
        </div>
      </div>
      <div className="flex items-center gap-4 justify-center pt-8">
        <div>
          <Image src={GroupImg} alt="" />
        </div>
        <div>
          <Image src={HandsImg} alt="" />
        </div>
      </div>
      <div className="flex justify-between mt-8">
        <div className="w-full p-4 pr-14">
          <h5 className="text-spanText text-textCustom font-semibold mb-2 font-inter">
            What sets us apart
          </h5>
          <h1 className="text-3xl lg:text-3xl text-hireMe mb-8 font-fira font-medium">
            We are client-inclined
          </h1>
          <p className="text-textCustom font-fira font-normal">
            Innovation is not just a goal; it{"'"}s our DNA. QuantumTech is
            driven by a passion for pushing boundaries and exploring the
            limitless possibilities that technology offers. We believe that true
            success lies in the success of our clients. Our customer-centric
            approach ensures that every solution we develop is tailored to meet
            the unique needs and goals of the businesses we serve.
          </p>
          <div className="pt-12 relative">
            <h1 className="text-qoute text-9xl font-fira absolute left-8 top-12">
              {"“"}
            </h1>
            <h1 className="text-2xl font-semibold px-20 font-fira pt-9 relative z-10">
              My vision for QuantumTech is rooted in the belief that technology
              has the power to transform not just businesses, but the entire
              business ecosystem. We{"'"}re not just creating solutions; we{"'"}
              re shaping a future where businesses can thrive, innovate, and
              make a positive impact on the world. Together, let{"'"}s pioneer
              tomorrow{"'"}s business landscape.
            </h1>
            <h1 className="text-qoute text-9xl font-fira rotate-180 absolute right-20 top-52">
              {"“"}
            </h1>
          </div>
        </div>
        <div className="w-3/6 p-4">
          <div>
            <h1 className="text-3xl lg:text-3xl mb-4 font-fira font-medium">
              Know the Team Lead
            </h1>
            <p className="text-textCustom font-fira font-normal pb-10">
              With a visionary spirit and a relentless passion for innovation,
              Alex Mercer founded QuantumTech in [Year] with the mission of
              revolutionizing the landscape of BusinessTech. Drawing on a
              background in quantum physics and a keen understanding of business
              dynamics, Alex envisions a future where technology empowers
              businesses to reach new heights of success. Beyond the boardroom,
              Alex is a dedicated advocate for STEM education and believes in
              nurturing the next generation of innovators.
            </p>
            <div>
              <Image
                src={TLeadImg}
                alt="Team Lead Image"
                // style={{ width: "90%" }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
