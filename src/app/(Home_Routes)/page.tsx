"use client";
import Image from "next/image";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import { Autoplay, Navigation } from "swiper/modules";
import { motion } from "framer-motion";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { HeroData, ShoppingCategory, ShoppingSport } from "@/constants";

const Home = () => {
  return (
    <div className="flex flex-col space-y-6  w-full">
      {/* Hero Section */}
      <section className="h-[660px] w-full relative">
        <div className="absolute bottom-6 space-x-3 right-4 text-xl text-white z-20">
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
      </section>
      {/* Hero Section */}

      <div className="globalContainer">
        {/* Sport section */}
        <section className="flex flex-col w-full py-5">
          <div className="flex justify-between w-full py-4">
            <h1 className="text-lg font-semibold">Shop By Sport</h1>
            <div className="flex gap-2">
              <button className="custom-prev bg-black/30 rounded-full p-2">
                <FaChevronLeft />
              </button>
              <button className="custom-next bg-black/30 rounded-full p-2">
                <FaChevronRight />
              </button>
            </div>
          </div>
          <Swiper
            modules={[Navigation]}
            slidesPerView={3}
            spaceBetween={10}
            navigation={{
              nextEl: ".custom-next",
              prevEl: ".custom-prev",
            }}
            className="w-full h-full"
          >
            {ShoppingSport.map((shop) => (
              <SwiperSlide
                key={shop.name}
                className="h-full w-full flex flex-col space-y-3"
              >
                <div className="aspect-[3/4] h-[400px] w-full">
                  <Image
                    src={shop.img}
                    alt={shop.name}
                    height={1000}
                    width={1000}
                    className="object-cover h-full w-full"
                  />
                </div>
                <span className="text-lg font-bold">{shop.name}</span>
              </SwiperSlide>
            ))}
          </Swiper>
        </section>
        {/* Sport section */}

        <div className="flex gap-3 px-5">
          <section className="flex flex-col w-full py-5">
            <div className="flex justify-between w-full py-4">
              <h1 className="text-lg font-semibold">Shop By Sport</h1>
              {ShoppingCategory.length === 3 && (
                <div className="flex gap-2">
                  <button className="custom-n bg-black/30 rounded-full p-2">
                    <FaChevronLeft />
                  </button>
                  <button className="custom-p bg-black/40 rounded-full p-2">
                    <FaChevronRight />
                  </button>
                </div>
              )}
            </div>
            <Swiper
              modules={[Navigation]}
              slidesPerView={3}
              spaceBetween={10}
              navigation={{
                nextEl: ".custom-n",
                prevEl: ".custom-p",
              }}
              className="w-full h-full"
            >
              {ShoppingCategory.map((shop) => (
                <SwiperSlide
                  key={shop.name}
                  className="h-full w-full flex flex-col space-y-3"
                >
                  <div className="aspect-[2/3] w-full">
                    <Image
                      src={shop.img}
                      alt={shop.name}
                      height={1000}
                      width={1000}
                      className="object-cover h-full w-full"
                    />
                  </div>
                  <span className="text-lg font-bold">{shop.name}</span>
                </SwiperSlide>
              ))}
            </Swiper>
          </section>
        </div>
      </div>
      <section className="flex flex-col space-y-6 items-center pb-16">
        <Image
          src="/img/section.png"
          alt="SectionImg"
          height={1000}
          width={1000}
          className="h-[600px] w-full object-cover object-top"
        />
        <button className="bg-black rounded-2xl text-white px-3 py-1">
          Shop Just Do It
        </button>
      </section>
    </div>
  );
};

export default Home;
