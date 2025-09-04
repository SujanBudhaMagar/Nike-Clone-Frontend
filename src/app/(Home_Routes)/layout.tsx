import Header from "@/components/cards/Header";
import Navbar from "@/components/cards/Navbar";
import React from "react";

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <Header />
      <Navbar />
      {children}
    </div>
  );
}
