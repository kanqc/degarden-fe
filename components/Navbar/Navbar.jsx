"use client";
import React, { useEffect, useState } from "react";
import { CategoryApi } from "@/lib/category";
import { Roboto, Montserrat } from "next/font/google";
import MobileSingleCate from "./MobileSingleCate";
import {
  FaChevronDown,
  FaShoppingCart,
  FaUserAlt,
  FaAlignJustify,
} from "react-icons/fa";

const roboto = Roboto({
  weight: "400",
  subsets: ["latin"],
});

const monsterat = Montserrat({
  weight: ["400", "400", "700"],
  subsets: ["latin"],
});

function Navbar(props) {
  const [fixedNav, setFixedNav] = useState(false);
  const [cateData, setCateData] = useState([]);
  const [mobileMenu, setMobileMenu] = useState(true);
  const [mobileSubMenu, setMobileSubMenu] = useState(false);
  const [cateSelected, setCateSelected] = useState(null);
  const fetchDataCategory = async () => {
    const categoryRes = await CategoryApi.getByTree();
    const cateData = categoryRes?.data[0]?.childCategory;
    setCateData(cateData);
  };

  useEffect(() => {
    fetchDataCategory();
    window.addEventListener("scroll", () => {
      if (window.scrollY >= 140) {
        setFixedNav(true);
      } else {
        setFixedNav(false);
      }
    });
  }, []);

  const toggle = (i) => {
    if (cateSelected == i) {
      return setCateSelected(null);
    } else {
      return setCateSelected(i);
    }
  };
  return (
    <div>
      {/* Window navbar */}
      <div
        className={`${monsterat.className} z-50 w-full bg-white text-[15px] font-light transition-all duration-300 sm:fixed lg:px-44 ${fixedNav ? `sm:h-24 lg:fixed lg:h-28 lg:animate-appear-from-top` : "sm:h-28 lg:h-36"}`}
      >
        <div className=" flex w-full gap-10 sm:justify-around">
          <div className="w-44 flex-none self-center sm:hidden lg:block">
            TẤT CẢ SẢN PHẨM
          </div>
          <div className="group h-full w-36 flex-none self-center sm:hidden lg:block">
            <div className="flex h-full w-full cursor-pointer justify-center gap-2">
              <div className="relative self-center after:absolute after:block after:h-1 after:w-0 after:border-b-2 after:border-b-pink-200 after:transition-all after:duration-300 after:ease-linear group-hover:font-semibold group-hover:after:w-full">
                SẢN PHẨM
              </div>
              <FaChevronDown className="self-center" />
            </div>
            <ul className="absolute left-0 hidden w-full justify-evenly border border-gray-100 bg-white px-32 group-hover:flex">
              {cateData.map((cate) => {
                return (
                  <li className={`${monsterat.className}  mb-10 mt-16 gap-4 `}>
                    <div className="animate-appear-from-top ">
                      <div className=" cursor-pointer text-base text-gray-700 after:block after:w-0 after:border-b-2 after:border-b-pink-200 after:transition-all after:duration-300 after:ease-linear hover:text-black hover:after:w-full">
                        {cate.name}
                      </div>
                      <ul className=" mx-auto flex flex-col pt-8">
                        {cate.childCategory &&
                          cate.childCategory.map((cateChild) => {
                            return (
                              <li className=" h-8 animate-[appear-from-top_0.7s_ease-in_forwards] cursor-pointer text-[13px] text-gray-700 after:block  after:w-0 after:border-b-2 after:border-b-pink-200 after:transition-all after:duration-300 after:ease-linear hover:text-black hover:after:w-full">
                                {cateChild.name}
                              </li>
                            );
                          })}
                      </ul>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
          <div className=" self-center sm:block lg:hidden">
            <div
              onClick={() => {
                setMobileMenu(!mobileMenu);
              }}
              className={`${mobileMenu ? "open" : ""} relative mx-auto h-5 w-7 rotate-0 cursor-pointer transition-all duration-500 ease-in-out `}
              id="hamberger"
            >
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
          <div className=" z-50 self-center lg:flex-1">
            <div className=" z-50 mx-auto flex flex-col justify-center rounded-full bg-white   sm:h-28 sm:w-32 lg:h-32 lg:w-36">
              <img
                src={"/assets/logo.png"}
                alt=""
                className=" mx-auto h-24 w-28 "
              />
            </div>
          </div>
          <div className="w-64 self-center sm:hidden lg:block">Search</div>
          <div className="w-28 self-center">
            <div className="flex justify-evenly gap-4 text-lg ">
              <FaUserAlt className="" />
              <div className="relative">
                <FaShoppingCart />
                <div className="absolute -right-4 -top-2 h-4 w-4 rounded-full bg-pink-500 text-xs">
                  <p className="text-center font-mono text-white">0</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Mobile navbar  */}
      <div
        className={`${mobileMenu ? "animate-show-mobile-menu" : "animate-hide-mobile-menu"} fixed top-24 z-40 h-[calc(100%-96px)] w-screen overflow-auto bg-white sm:block  lg:hidden`}
      >
        <div
          className={`${monsterat.className} flex w-full flex-col gap-4 pl-5 pr-10 pt-16 text-lg`}
        >
          <div className="py-1 pl-2">Tất cả sản phẩm</div>
          <div
            className={`${mobileSubMenu ? "bg-pink-300 font-semibold text-white " : "bg-white text-black"} flex justify-between transition-all duration-100 ease-linear`}
            onClick={() => {
              setMobileSubMenu(!mobileSubMenu);
            }}
          >
            <p className="block py-1 pl-2">Sản phẩm</p>
            <FaChevronDown
              className={`${mobileSubMenu ? "rotate-180" : ""} mr-2 self-center transition-all duration-200 ease-in`}
            />
          </div>
          <div
            className={`${mobileSubMenu ? "block animate-show-mobile-cate overflow-hidden " : "hidden "} `}
          >
            <div className="flex flex-col justify-between ">
              {cateData.map((cate) => {
                return <MobileSingleCate cate={cate} />;
              })}
            </div>
          </div>
          <div className="mb-5 py-1 pl-2">Search</div>
        </div>
      </div>
      <div className="h-96 bg-red-50"></div>
      <div className="h-96 bg-red-50"></div>{" "}
      <div className="h-96 bg-red-50"></div>{" "}
      <div className="h-96 bg-red-50"></div>{" "}
      <div className="h-96 bg-red-50"></div>{" "}
      <div className="h-96 bg-red-50"></div>
    </div>
  );
}

export default Navbar;
