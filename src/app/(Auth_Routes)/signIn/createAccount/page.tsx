"use client";
import { useRouter } from "next/navigation";
import React from "react";
import { FaRegEye } from "react-icons/fa";
import { GrCycle } from "react-icons/gr";
import { SiJordan, SiNike } from "react-icons/si";
import { motion } from "framer-motion";
import InputField from "@/components/cards/InputField";
const CreateAccount = () => {
  const router = useRouter();
  return (
    <div>
      <div className="flex flex-col items-center justify-center">
        <div className="py-10 px-4 w-[400px] flex flex-col">
          <div className="flex items-center gap-3 mb-6">
            <SiNike size={40} />
            <SiJordan size={36} />
          </div>
          <h1 className="text-2xl text-primary">
            Now let's make you a Nike Member.
          </h1>
          <div className="flex text-base gap-1">
            <span>
              We have sent a code to
              <br /> example@gmail.com
            </span>
            <button
              onClick={() => router.back()}
              className="underline pt-6 text-sm text-gray-500"
            >
              Edit
            </button>
          </div>
          <form>
            <section className="flex flex-col space-y-8 pt-8">
              <div className="relative">
                <InputField name="Code*" type="number" />
                <GrCycle size={18} className="absolute top-4 right-3" />
              </div>
              <div className="flex gap-3 w-full">
                <InputField name="First Name*" type="text" />
                <InputField name="Last Name*" type="text" />
              </div>
              <div className="flex flex-col text-gray-500 space-y-2 relative">
                <InputField name="Password*" type="password" />
                <FaRegEye size={18} className="absolute top-4 right-3" />
                <span className="text-sm">X Minimum of 8 characters</span>
                <span className="text-sm">
                  X Uppercase, Lower case and a number
                </span>
              </div>
              <div className="flex flex-col space-y-3">
                <h1>Date Of Birth</h1>
                <div className="flex gap-3">
                  <InputField name="Month*" type="number" />
                  <InputField name="Day*" type="number" />
                  <InputField name="Year*" type="number" />
                </div>
              </div>
              <div>
                <input type="checkbox" />
                <span>
                  Sign up for emails to get updates from Nike on
                  <br /> products, offers and your Member benefits.
                </span>
              </div>
              <div>
                <input type="checkbox" />
                <span>
                  I agree to Nike's <a href="">Privacy Policy </a>and{" "}
                  <a>Terms of Use.</a>
                </span>
              </div>
            </section>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreateAccount;
