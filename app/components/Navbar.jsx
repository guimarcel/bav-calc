import React from "react";
import Logo from "./Logo";

function Navbar() {
  const menuItems = [
    { name: "Bhaskara", href: "/bhaskara" },
    { name: "Pythagoras", href: "/pythagoras" },
    {
      name: "General Equation of the Line",
      href: "/general-equation-of-the-line",
    },
    { name: "Areas", href: "/areas" },
    { name: "Law of Cosines", href: "/law-of-cosines" },
    { name: "Average Velocity", href: "/average-velocity" },
    { name: "Weight Force", href: "/weight-force" },
    { name: "Tales' Theorem", href: "/tales-theorem" },
  ];

  return (
    <div className="shadow-md shadow-slate-300 relative z-50">
      <div className="py-2 bg-blue-1 flex flex-col justify-center items-center text-bege-1">
        <Logo></Logo>
      </div>
      <div className="flex overflow-x-auto divide-x-2 justify-center items-center py-1 bg-blue-2">
        {menuItems.map((menu, key) => (
          <a className="px-4 text-gray-1 hover:font-bold hover:scale-105 hover:text-bege-1 transition-all" href={menu.href} key={key}>
            {menu.name}
          </a>
        ))}
      </div>
    </div>
  );
}

export default Navbar;
