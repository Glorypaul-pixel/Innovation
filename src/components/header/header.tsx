import React from "react";
import Logo from "../../img/Layer.png";
import Image from "next/image";

const Header: React.FC = () => {
  return (
    <header className="bg-white text-navText p-header flex items-center justify-between w-full max-w-header h-header opacity-100">
      <div className="flex flex-col items-center gap-0 opacity-100">
        <Image src={Logo} alt="Logo" className="h-logo w-logo" />
        <p className="font-fira text-custom italic font-medium leading-custom text-left  h-custom-p opacity-100">
          Transforming the future
        </p>
      </div>
      <div className="flex items-center space-x-28">
        <nav className="flex space-x-14 text-navText text-xs font-fira font-semibold">
          <a
            href="#home"
            className="text-hireMe underline-offset-2 border-b-2 border-hireMe"
          >
            Home
          </a>
          <a href="#about" className="hover:text-hireMe">
            About Us
          </a>
          <a href="#services" className="hover:text-hireMe">
            Services
          </a>
          <a href="#contact" className="hover:text-hireMe">
            Contact Us
          </a>
        </nav>
        <div className="flex items-center justify-center gap-10">
          <a
            href="#hire"
            className="bg-hireMe text-xs text-white font-bold py-2 px-4 h-hire-btn w-hire-btn flex items-center justify-center"
          >
            Hire Us
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
