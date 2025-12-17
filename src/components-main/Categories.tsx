import React from "react";
import imgVegitable from "../img/organic_vegitable.png";

const Categories = () => {
  return (
    <div className="mt-16 px-30">
      <p className="text-2xl md:text-3xl font-medium">Categories</p>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-7 mt-6 gap-6">
        <div className="group cursor-pointer py-5 px-3 gap-2 rounded-lg flex flex-col justify-center items-center bg-[#FEF6DA]">
          <img
            className="group-hover:scale-108 transition max-w-28"
            alt="vegitable"
            src={imgVegitable.src}
          />
          <p className="text-sm font-medium">Organic veggies</p>
        </div>
        <div className="group cursor-pointer py-5 px-3 gap-2 rounded-lg flex flex-col justify-center items-center bg-[#FEE0E0]">
          <img
            className="group-hover:scale-108 transition max-w-28"
            alt="vegitable"
            src="https://greencart-gs.vercel.app/assets/fresh_fruits_image-GVwDikkj.png"
          />
          <p className="text-sm font-medium">Fresh Fruits</p>
        </div>
        <div className="group cursor-pointer py-5 px-3 gap-2 rounded-lg flex flex-col justify-center items-center bg-[#F0F5DE]">
          <img
            className="group-hover:scale-108 transition max-w-28"
            alt="vegitable"
            src="https://greencart-gs.vercel.app/assets/bottles_image-DMalNkiM.png"
          />
          <p className="text-sm font-medium">Cold Drinks</p>
        </div>
        <div className="group cursor-pointer py-5 px-3 gap-2 rounded-lg flex flex-col justify-center items-center bg-[#E1F5EC]">
          <img
            className="group-hover:scale-108 transition max-w-28"
            alt="vegitable"
            src="https://greencart-gs.vercel.app/assets/maggi_image-DD7JXh5a.png"
          />
          <p className="text-sm font-medium">Instant Food</p>
        </div>
        <div className="group cursor-pointer py-5 px-3 gap-2 rounded-lg flex flex-col justify-center items-center bg-[#FEE6CD]">
          <img
            className="group-hover:scale-108 transition max-w-28"
            alt="vegitable"
            src="https://greencart-gs.vercel.app/assets/dairy_product_image-B1gRG1MT.png"
          />
          <p className="text-sm font-medium">Dairy Products</p>
        </div>
        <div className="group cursor-pointer py-5 px-3 gap-2 rounded-lg flex flex-col justify-center items-center bg-[#E0F6FE]">
          <img
            className="group-hover:scale-108 transition max-w-28"
            alt="vegitable"
            src="https://greencart-gs.vercel.app/assets/bakery_image-e5rU_kNe.png"
          />
          <p className="text-sm font-medium">Bakery &amp; Breads</p>
        </div>
        <div className="group cursor-pointer py-5 px-3 gap-2 rounded-lg flex flex-col justify-center items-center bg-[#F1E3F9]">
          <img
            className="group-hover:scale-108 transition max-w-28"
            alt="vegitable"
            src="https://greencart-gs.vercel.app/assets/grain_image-BkT7wje5.png"
          />
          <p className="text-sm font-medium">Grains &amp; Cereals</p>
        </div>
      </div>
    </div>
  );
};

export default Categories;
