import React from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/logo-footer.png";

function Footer() {
  return (
    <>
      <div className=" bg-linear-pink-invert pb-12">
        <div className="mx-auto container pt-20 lg:pt-72 flex flex-col items-center justify-center">
          <Link to="/">
            <img src={Logo} className="w-36" alt="Logo" />
          </Link>
          <div className="text-black flex flex-col md:items-center f-f-l pt-3">
            <div className="my-6 text-base text-color f-f-l">
              <ul className="md:flex items-center">
                <li className=" md:mr-6 cursor-pointer pt-4 lg:py-0">
                  <Link to="/">Home</Link>
                </li>
                <li className=" md:mr-6 cursor-pointer pt-4 lg:py-0">
                  <Link to="/about">About</Link>
                </li>
                <li className="cursor-pointer pt-4 lg:py-0">
                  <Link to="/contact">Contact</Link>
                </li>
              </ul>
            </div>
            <div className="text-sm text-color mb-10 f-f-l">
              <p> © 2021 Osamah Amer. All rights reserved</p>
            </div>
          </div>
          <div className="w-9/12  h-0.5 bg-gray-100 rounded-full" />
        </div>
      </div>
    </>
  );
}

export default Footer;
