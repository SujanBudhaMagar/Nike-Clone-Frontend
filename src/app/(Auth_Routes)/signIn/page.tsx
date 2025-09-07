"use client";
import Link from "next/link";
import React, { useState } from "react";
import { SiJordan, SiNike } from "react-icons/si";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [country, setCountry] = useState("");

  return (
    <div className="flex flex-col items-center justify-center">
      <div className="py-10 px-4 w-[400px] flex flex-col">
        <div className="flex items-center gap-3 mb-6">
          <SiNike size={40} />
          <SiJordan size={40} />
        </div>
        <h1 className="text-2xl mb-3">
          Enter your email to join us or sign in.
        </h1>
        <div className="flex gap-3">
          <label>Nepal</label>
          <select
            className="appearance-none underline w-full outline-none"
            name="country"
            onChange={(e) => setCountry(e.target.value)}
            value={country}
          >
            <option className="w-full px-4" value="nepal">
              Change
            </option>
          </select>
        </div>
        <input
          type="text"
          placeholder="Email*"
          className="border border-primary px-3 py-3 rounded-sm my-9"
          onChange={(e) => setEmail(e.target.value)}
          name="email"
          value={email}
          required
        />
        <span className="text-base">
          By continuing, I agree to Nike’s{" "}
          <a href="/privacy&policy" className="underline text-gray-500">
            Privacy Policy
          </a>{" "}
          and{" "}
          <a href="/termsOfUse" className="underline text-gray-500">
            Terms of Use.
          </a>
        </span>
        <Link href="/signIn/createAccount" className="w-full flex justify-end">
          <button className="bg-primary text-white mt-8 py-2 rounded-4xl w-[100px] cursor-pointer">
            Continue
          </button>
        </Link>
      </div>
    </div>
  );
};

export default SignIn;
