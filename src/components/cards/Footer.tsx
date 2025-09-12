"use client";
import { FooterData, ModalData } from "@/constants";
import Link from "next/link";
import React, { useState } from "react";
import { CgClose } from "react-icons/cg";
import { CiLocationOn } from "react-icons/ci";

const Footer = () => {
  const [isOpen, setIsOpen] = useState(false);
  // const [selected, setSelected] = useState("");

  return (
    <>
      <hr className="h-0.5 w-full" />
      <section className="globalContainer flex items-start justify-between py-10">
        <div className="flex flex-col space-y-5">
          <h1 className="text-primary text-base font-semibold">Resources</h1>
          <div>
            {FooterData.slice(0, 5).map((foot, idx) => (
              <FooterCard key={idx} link={foot.link} name={foot.name} />
            ))}
          </div>
        </div>
        <div className="flex flex-col space-y-5">
          <h1 className="text-primary text-base font-semibold">Help</h1>
          <div>
            {FooterData.slice(6, 13).map((foot, idx) => (
              <FooterCard key={idx} link={foot.link} name={foot.name} />
            ))}
          </div>
        </div>
        <div className="flex flex-col space-y-5">
          <h1 className="text-primary text-base font-semibold">Company</h1>
          <div>
            {FooterData.slice(14, 19).map((foot, idx) => (
              <FooterCard key={idx} link={foot.link} name={foot.name} />
            ))}
          </div>
        </div>
        <div className="flex flex-col space-y-5">
          <h1 className="text-primary text-base font-semibold">
            Promotions & Discounts
          </h1>
          <div>
            {FooterData.slice(20, 24).map((foot, idx) => (
              <FooterCard key={idx} link={foot.link} name={foot.name} />
            ))}
          </div>
        </div>
        <button onClick={() => setIsOpen(true)}>United States</button>
        {isOpen && (
          <div className="fixed inset-0 h-screen bg-white z-50">
            <div className="flex items-center justify-center py-10">
              <h1 className="text-primary text-center text-4xl">
                Select Your Location
              </h1>
              <CgClose
                size={36}
                onClick={() => setIsOpen(false)}
                className="text-primary absolute right-20 bg-black/40 rounded-full p-2"
              />
            </div>
            <div className="px-44 py-10">
              <div className="flex flex-col space-y-4">
                <h1 className="text-4xl">Africa</h1>
                <div className="grid grid-cols-4 gap-4">
                  {ModalData.slice(0, 4).map((modal, i) => (
                    <CountryModal
                      key={i}
                      name={modal.name}
                      language={modal.language}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
        {/* {ModalData} */}
      </section>
    </>
  );
};

export default Footer;

const FooterCard = ({ link, name }: { link: string; name: string }) => (
  <ul className="flex flex-col text-base font-medium">
    <Link href={link} className="mb-1">
      {name}
    </Link>
  </ul>
);

const CountryModal = ({
  name,
  language,
}: {
  name: string;
  language: string;
}) => (
  <div className="border border-primary rounded-4xl p-4 flex gap-3 items-start hover:bg-gray-100 cursor-pointer">
    <CiLocationOn size={30} />
    <div className="flex flex-col space-y-1 text-xl text-primary">
      <span className="font-semibold">{name}</span>
      <span className="font-medium">{language}</span>
    </div>
  </div>
);
