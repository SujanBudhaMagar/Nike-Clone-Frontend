import { HeaderData } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { SiJordan } from "react-icons/si";

const Header = () => {
  return (
    <div className="bg-gray-100 globalContainer hidden md:block">
      <div className="flex items-center justify-between">
        <div className="flex gap-2">
          <SiJordan size={20} />
          <Image
            src="/logo/converseLogo.jpg"
            alt="Converse"
            height={200}
            width={200}
            className="h-5 w-5"
          />
        </div>
        <div className="flex">
          {HeaderData.map((header, idx) => (
            <ul key={idx} className="flex gap-5 mr-2">
              <Link
                href={header.link}
                className="text-primary text-xs font-semibold"
              >
                {header.name}
                {idx !== HeaderData.length - 1 && "     |"}
              </Link>
            </ul>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Header;
