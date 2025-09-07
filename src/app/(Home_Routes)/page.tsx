"use client";
import Image from "next/image";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import { Autoplay, Navigation } from "swiper/modules";
import { motion } from "framer-motion";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { HeroData } from "@/constants";

const Home = () => {
  return (
    <div className="h-[660px] w-full">
      <div className="absolute bottom-6 space-x-3 right-4 text-xl text-white z-50">
        <button className="prev bg-black/30 rounded-full p-2">
          <FaChevronLeft />
        </button>
        <button className="nex bg-black/30 rounded-full p-2">
          <FaChevronRight />
        </button>
      </div>
      <Swiper
        modules={[Autoplay, Navigation]}
        slidesPerView={1}
        loop={true}
        navigation={{
          nextEl: ".nex",
          prevEl: ".prev",
        }}
        autoplay={{ delay: 8000, disableOnInteraction: false }}
        className="h-full relative"
      >
        {HeroData.map((item, i) => (
          <SwiperSlide key={i} className="h-full">
            <div className="relative w-full h-full">
              <Image
                src={item.img}
                alt={item.title}
                fill
                className="object-cover"
              />
              <div className="absolute h-full w-full flex flex-col items-center justify-center text-white text-center px-4 md:px-10">
                <motion.div
                  initial={{ opacity: 0, x: 0 }}
                  whileInView={{ opacity: 1, x: -20 }}
                  transition={{ delay: 0.3 }}
                >
                  <h1 className="text-3xl md:text-6xl font-bold">
                    {item.title}
                  </h1>
                  <p className="mt-4 md:mt-6 text-lg md:text-2xl">
                    {item.description}
                  </p>
                  <div className="mt-6 flex gap-4 flex-wrap justify-center cur">
                    <button className="bg-white text-black px-6 py-2 rounded font-semibold hover:bg-gray-50 transition duration-200">
                      {item.btn1}
                    </button>
                    {item.btn2 && (
                      <button className="bg-transparent border border-white px-6 py-2 rounded font-semibold hover:bg-white hover:text-black transition">
                        {item.btn2}
                      </button>
                    )}
                  </div>
                </motion.div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Home;
