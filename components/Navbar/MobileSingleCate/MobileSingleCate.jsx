"use client";
import React, { useState } from "react";
import { FaChevronDown } from "react-icons/fa";
function MobileSingleCate({ cate }) {
  const [selected, setSelected] = useState(false);
  return (
    <div>
      <div
        className={`${selected ? " text-white" : "bg-white text-black"}mb-2 pl-3`}
      >
        <div
          className="flex flex-row justify-between "
          onClick={() => {
            setSelected(!selected);
          }}
        >
          {cate.name}
          <FaChevronDown
            className={`${cate.childCategory ? "block" : "hidden"} ${selected ? " rotate-180 " : " rotate-"} mr-2 self-center transition-all duration-200 ease-in`}
          />
        </div>
      </div>
      <ul className="mb-2 flex flex-col overflow-hidden pl-5 pt-1">
        {cate.childCategory &&
          cate.childCategory.map((item) => {
            return (
              <li
                className={`${selected ? "my-2 block animate-show-mobile-cate" : "hidden"} text-base font-light`}
              >
                {item.name}
              </li>
            );
          })}
      </ul>
    </div>
  );
}

export default MobileSingleCate;
