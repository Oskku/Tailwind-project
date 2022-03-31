import React from "react";
import { data } from "./Data/ServicesData";
import { useParams } from "react-router-dom";
import Mail from "./Mail"

const Services = () => {
  const { slug } = useParams();
  const ServiceData = data.filter((service) => service.slug === slug)[0]

  return (
    <div className="md:w-2/3 p-4 mx-auto lg:mt-10">
    <div className="bg-white p-6 rounded-lg mb-6">
        <img
          className="lg:h-96 xl:w-full xl:h-full md:h-80 sm:h-72 xs:h-72 h-72 rounded lg:rounded-lg w-full object-cover object-center mb-6"
          src={ServiceData.imageUrl}
          alt={ServiceData.title}
        />
      <h3 className="tracking-widest md:text-lg xl:text-xl text-indigo-500 text-xs font-medium title-font lg:mt-10">
        {ServiceData.subtitle}
      </h3>
      <h2 className="text-lg md:text-2xl text-gray-900 font-medium title-font mb-4 xl:text-5xl lg:mt-1">
        {ServiceData.title}
      </h2>
      <p className="leading-relaxed text-base lg:text-lg opacity-80 xl:mt-5">
        {ServiceData.description}
      </p>
      <h4 className="text-lg md:text-xl font-bold mt-5 text-gray-500">Hinta: {ServiceData.price}</h4>
    </div>
    <Mail />
  </div>
  );
};

export default Services;
