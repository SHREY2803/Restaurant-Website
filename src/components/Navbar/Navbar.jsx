import React from "react";
import Logo from "../../assets/food-logo.png";
import { FaCartShopping } from "react-icons/fa6";
import DarkMode from "./DarkMode";

const Menu = [
  {
    id: 1,
    name: "Home",
    link: "/#",
  },
  {
    id: 2,
    name: "Services",
    link: "/#services",
  },
  {
    id: 3,
    name: "Testimonial",
    link: "/#testimonial",
  },
  {
    id: 4,
    name: "Contact Us",
    link: "/#contact",
  },
];
const Navbar = () => {
  return (
    <>
      <div className="duration-200 bg-white shadow-md dark:bg-gray-900 dark:text-white">
        <div className="container py-3 sm:py-0">
          <div className="flex items-center justify-between">
            <div>
              <a href="#" className="flex gap-2 text-2xl font-bold sm:text-3xl">
                <img src={Logo} alt="Logo" className="w-10" />
                Eatery Zone
              </a>
            </div>
            <div className="flex items-center justify-between gap-4">
              <div>
                <DarkMode />
              </div>
              <ul className="items-center hidden gap-4 sm:flex">
                {Menu.map((menu) => (
                  <li key={menu.id}>
                    <a
                      href={menu.link}
                      className="inline-block px-4 py-4 hover:text-yellow-500"
                    >
                      {menu.name}
                    </a>
                  </li>
                ))}
              </ul>
              <button className="flex items-center gap-3 px-4 py-1 text-white duration-200 rounded-full bg-gradient-to-r from-primary to-secondary hover:scale-105">
                Order
                <FaCartShopping className="text-xl text-white cursor-pointer drop-shadow-sm" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
