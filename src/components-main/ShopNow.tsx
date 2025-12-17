import React from "react";
import myImg from "../img/banner.png";

const ShopNow = () => {
  return (
    <section className=" px-30 pt-10">
      <div className="relative">
        <img alt="banner" className="w-full hidden md:block" src={myImg.src} />

        <div className="absolute inset-0 flex flex-col items-center md:items-start justify-end md:justify-center pb-24 md:pb-0 px-4 md:pl-18 lg:pl-24">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center md:text-left max-w-72 md:max-w-80 lg:max-w-105 leading-tight lg:leading-15">
            Freshness You Can Trust, Savings You will Love!
          </h1>
          <div className="flex items-center mt-6 font-medium">
            <span className="group flex items-center gap-2 px-7 md:px-9 py-3 bg-green-500 hover:bg-green-600 transition rounded text-white cursor-pointer">
              Shop now
              <img
                className="md:hidden transition group-focus:translate-x-1"
                alt="arrow"
                src="data:image/svg+xml,%3csvg%20width='16'%20height='12'%20viewBox='0%200%2016%2012'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M1.64151%205.76562L14.7324%205.76562'%20stroke='white'%20stroke-width='1.5'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M9.58956%200.894889L14.7324%205.76532L9.58956%2010.6357'%20stroke='white'%20stroke-width='1.5'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/svg%3e"
              />
            </span>
            <span className="group hidden md:flex items-center gap-2 px-9 py-3 cursor-pointer">
              Explore deals
              <img
                className="transition group-hover:translate-x-1"
                alt="arrow"
                src="data:image/svg+xml,%3csvg%20width='15'%20height='12'%20viewBox='0%200%2015%2012'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M1.00089%205.87109L14.0918%205.87109'%20stroke='%232B3441'%20stroke-width='1.5'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M8.94894%201.00036L14.0918%205.87078L8.94894%2010.7412'%20stroke='%232B3441'%20stroke-width='1.5'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/svg%3e"
              />
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShopNow;
