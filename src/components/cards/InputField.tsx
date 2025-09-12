import React, { useState } from "react";
import { motion } from "framer-motion";
import { InputFieldProps } from "@/types";

const InputField = ({ name, type }: InputFieldProps) => {
  const [value, setValue] = useState("");
  const [focus, setFocus] = useState(false);
  return (
    <div>
      <div className="relative">
        <motion.label
          initial={{ opacity: 0.6, y: "50%", x: "0%" }}
          animate={{
            y: focus || value ? "-50%" : "50%",
            x: focus || value ? "-5%" : "0%",
            opacity: focus || value ? 1 : 0.6,
            scale: focus || value ? 0.7 : 0.9,
          }}
          transition={{
            type: "spring",
            stiffness: 300,
            damping: 20,
          }}
          className="absolute left-3 top-3 transform -translate-y-1/2 pointer-events-none text-gray-500 bg-white z-20"
        >
          {name}
        </motion.label>
        <motion.input
          type={type}
          onFocus={() => setFocus(true)}
          onBlur={() => setFocus(false)}
          onChange={(e) => setValue(e.target.value)}
          whileFocus={{ borderColor: "#171717", scale: 1 }}
          className="border border-primary p-3 w-full rounded-md relative outline-none"
        />
      </div>
    </div>
  );
};

export default InputField;
