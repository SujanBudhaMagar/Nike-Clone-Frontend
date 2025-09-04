import { NavData } from "@/constants";
import Link from "next/link";
import React from "react";
import { CiHeart, CiSearch } from "react-icons/ci";
import { IoBagOutline } from "react-icons/io5";
import { SiNike } from "react-icons/si";

const Navbar = () => {
  return (
    <div className="bg-white globalContainer">
      <div className="flex justify-between items-center">
        <SiNike size={60} />
        <div className="flex gap-4 items-center justify-center font-semibold w-full pl-32">
          {NavData.map((nav, idx) => (
            <ul key={idx} className="text-base">
              <Link href={nav.link}>{nav.name}</Link>
            </ul>
          ))}
        </div>
        <div className="flex items-center justify-center gap-3">
          <div className="relative rounded-4xl bg-gray-200/50 px-3 py-2 flex w-[190px]">
            <input
              type="text"
              placeholder="Search"
              className="outline-none pl-9 text-text"
            />
            <CiSearch size={24} className="absolute left-4 top-2 text-text" />
          </div>
          <CiHeart size={24} className="text-primary" />
          <IoBagOutline size={24} className="text-primary" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
