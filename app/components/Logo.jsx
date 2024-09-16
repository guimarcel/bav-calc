import React from "react";
import Image from "next/image";

export default function Logo() {
  return (
    <div className="flex gap-5 items-center">
      <Image
        src={"/math.png"}
        width={80}
        height={80}
        className="w-14 h-14 md:w-20 md:h-20 lg:w-24 lg:h-24"
        alt="Logo"
      />

      <div className="flex flex-col items-center justify-center">
        <div className="text-2xl md:text-3xl lg:text-4xl font-bold uppercase">
          Equation Solver
        </div>
        <div className="italic text-sm md:text-base lg:text-lg font-thin uppercase">
          - your free online mathematician -
        </div>
      </div>
    </div>
  );
}
