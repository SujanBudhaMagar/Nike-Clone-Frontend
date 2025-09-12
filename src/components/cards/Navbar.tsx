"use client";
import { NavData } from "@/constants";
import Link from "next/link";
import React, { useState } from "react";
import { CiHeart, CiSearch } from "react-icons/ci";
import { IoBagOutline } from "react-icons/io5";
import { SiNike } from "react-icons/si";
import { AnimatePresence, motion } from "framer-motion";
import { MdMenu } from "react-icons/md";
import { FiUser } from "react-icons/fi";
import { CgClose } from "react-icons/cg";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div className="globalContainer relative">
      <div className="grid grid-cols-2 md:grid-cols-3 items-center relative px-2 md:px-0">
        <SiNike size={60} />
        <div className="flex md:hidden items-center justify-end gap-3 text-xl">
          <CiSearch />
          <FiUser />
          <IoBagOutline />
          <MdMenu onClick={() => setIsOpen(true)} />
        </div>
        <div
          className="relative w-full md:block hidden"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Nav Links */}
          <div className="md:flex hidden gap-4 items-center justify-center font-semibold p-4">
            {NavData.map((nav, idx) => (
              <div key={idx} className="text-base">
                <Link
                  href={nav.link}
                  className="text-primary hover:underline underline-offset-8"
                >
                  {nav.name}
                </Link>
              </div>
            ))}
          </div>
          <AnimatePresence>
            {isHovered && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                style={{
                  left: "calc(-200% - 2rem)",
                  right: "calc(-200% - 2rem)",
                }}
                className="absolute top-full bg-white shadow-lg z-50"
              >
                <div className="max-w-screen-xl mx-auto grid grid-cols-4 gap-6 p-6">
                  <div>
                    <h3 className="font-semibold mb-2">New & Featured</h3>
                    <ul className="space-y-1 text-sm text-gray-600">
                      <li>
                        <Link href="#">New Releases</Link>
                      </li>
                      <li>
                        <Link href="#">Best Sellers</Link>
                      </li>
                      <li>
                        <Link href="#">Member Exclusive</Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <div className="hidden md:flex items-center justify-end gap-3">
          <div className="relative rounded-4xl bg-gray-200/50 px-3 py-2 flex w-[190px]">
            <input
              type="text"
              placeholder="Search"
              className="outline-none pl-9 text-primary"
            />
            <CiSearch
              size={24}
              className="absolute left-4 top-2 text-primary"
            />
          </div>
          <CiHeart size={24} className="text-primary" />
          <IoBagOutline size={24} className="text-primary" />
        </div>
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-black/50 z-50 flex justify-end"
          >
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className="bg-white w-2/3 h-full p-6 relative"
            >
              <CgClose
                className="text-primary absolute top-4 right-4 cursor-pointer"
                onClick={() => setIsOpen(false)}
              />
              <div></div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Navbar;
