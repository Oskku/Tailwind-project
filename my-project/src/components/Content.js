import React from "react";
import { data } from "./Data/ServicesData";
import { Link } from "react-router-dom";

function Content() {
  return (
    <div className="flex justify-center" id="order">
      <section className="text-gray-600 body-font flex">
        <div className="container px-5 py-24 mx-auto max-w-7x1">
          <div className="flex flex-wrap w-full mb-4 p-4">
            <div className="w-full mb-6 lg:mb-0">
              <h1 className=" animate-pulse sm:text-4xl text-5xl  font-bold title-font mb-2 text-gray-900">
                Palvelumme
              </h1>
              <div className="h-1 w-20 bg-indigo-500 rounded" />
            </div>
          </div>
          <div className="flex flex-wrap -m-4">
            {data.map((service) => (
              <div className="xl:w-1/3 md:w-1/2 p-4" key={service.slug}>
                <div className="bg-white p-6 rounded-lg">
                  <Link to={`services/${service.slug}`}>
                    <img
                      className="lg:h-60 xl:h-56 md:h-64 sm:h-72 xs:h-72 h-72 rounded w-full object-cover object-center mb-6 cursor-pointer"
                      src={service.imageUrl}
                      alt={service.title}
                    />
                  </Link>
                  <h3 className="tracking-widest text-indigo-500 text-xs title-font uppercase font-medium">
                    {service.subtitle}
                  </h3>
                  <h2 className="text-xl text-gray-900 font-medium title-font mb-2">
                    {service.title}
                  </h2>
                  <p className="leading-relaxed text-base w-full h-12 text-ellipsis overflow-hidden ...">
                    {service.description}
                  </p>
                  <button className=" bg-white hover:bg-indigo-50 transition text-sm font-medium border-2 rounded-full text-indigo-500 border-indigo-500 px-3 py-1 mt-4">
                    <Link to={`services/${service.slug}`}>more info</Link>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Content;
