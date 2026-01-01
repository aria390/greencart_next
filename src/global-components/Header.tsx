"use client";

import React from "react";
import myImg from "../img/logo-CMLzTNjw.svg";
import IFIsLogin from "./IFIsLogin";
import { useIsLogin } from "@/store/useIsLogin";
import { useModule } from "@/store/useModule";
import Link from "next/link";

const Header = () => {
  const { IsLogin } = useIsLogin();
  const { setIsOpen } = useModule();

  return (
    <div className="flex items-center justify-between px-6 md:px-16 lg:px-24 xl:px-32 py-4 border-b border-gray-300">
      <span>
        <img
          className="cursor-pointer w-34 md:w-38"
          alt="logo"
          src={myImg.src}
        />
      </span>
      <div className="hidden md:flex items-center gap-8">
        <button className="border border-gray-300 px-3 py-1 rounded-full text-xs cursor-pointer opacity-80">
          Seller Dashboard
        </button>
        <Link href="/">
          <span className="cursor-pointer">Home</span>
        </Link>
        <Link href="./allProducts">
          <span className="cursor-pointer">All Product</span>
        </Link>
        <div className="flex items-center text-sm gap-2 border border-gray-300 px-3 rounded-full max-lg:hidden">
          <input
            className="py-1.5 w-full bg-transparent outline-none placeholder-gray-500"
            placeholder="Search products"
            type="text"
          />
          <img
            className="w-4 h-4"
            alt="search"
            src="data:image/svg+xml,%3csvg%20width='16'%20height='16'%20viewBox='0%200%2016%2016'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M10.8359%2010.6152L14.9999%2014.6949'%20stroke='%237A7B7D'%20stroke-width='1.2'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M9.14099%2011.7381C11.8699%2010.6019%2013.142%207.51376%2011.9822%204.84043C10.8224%202.1671%207.67004%200.920959%204.94113%202.0571C2.21222%203.19324%200.940171%206.28142%202.09993%208.95475C3.25969%2011.6281%206.41208%2012.8742%209.14099%2011.7381Z'%20stroke='%237A7B7D'%20stroke-width='1.2'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/svg%3e"
          />
        </div>
        <div className="relative cursor-pointer">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="22"
            height="20"
            viewBox="0 0 22 20"
            fill="none"
          >
            <path
              d="M7.72852 15.375C8.59146 15.375 9.29102 16.0186 9.29102 16.8125C9.29102 17.6064 8.59146 18.25 7.72852 18.25C6.86557 18.25 6.16602 17.6064 6.16602 16.8125C6.16602 16.0186 6.86557 15.375 7.72852 15.375Z"
              stroke="#364153"
              strokeWidth="1.6"
            />
            <path
              d="M16.1035 15.375C16.9664 15.375 17.666 16.0185 17.666 16.8125C17.666 17.6064 16.9664 18.25 16.1035 18.25C15.2406 18.25 14.541 17.6064 14.541 16.8125C14.541 16.0185 15.2406 15.375 16.1035 15.375Z"
              stroke="#364153"
              strokeWidth="1.6"
            />
            <path
              d="M1 1L1.27209 1.08801C2.62792 1.52656 3.30583 1.74583 3.69358 2.26786C4.08133 2.78989 4.08133 3.48329 4.08133 4.87009V7.47833C4.08133 10.2974 4.14721 11.2276 5.04971 12.1034C5.95221 12.9792 7.40476 12.9792 10.3099 12.9792H11.4167M15.8337 12.9792C17.4598 12.9792 18.2728 12.9792 18.8475 12.5483C19.4222 12.1174 19.5864 11.3849 19.9146 9.91969L20.4352 7.59597C20.7968 5.92937 20.9775 5.09608 20.5151 4.54303C20.0527 3.99 18.4727 3.99 16.7175 3.99H10.3995M4.08133 3.99H6.20833"
              stroke="#364153"
              strokeWidth="1.6"
              strokeLinecap="round"
            />
          </svg>
          <button className="absolute -top-2 -right-3 text-xs text-white bg-green-500 w-4.5 h-4.5 rounded-full">
            0
          </button>
        </div>
        {IsLogin ? (
          <IFIsLogin />
        ) : (
          <button
            onClick={() => {
              setIsOpen(true);
            }}
            className="cursor-pointer px-8 py-2 bg-green-500 transition bg-primary-dull text-white rounded-full"
          >
            Login
          </button>
        )}
      </div>
    </div>
  );
};

export default Header;
