import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav className="bg-gray-800 text-white px-12 sm:px-24 py-4">
      <div className=" mx-auto flex justify-between items-center">
        <div className="text-xl font-bold">JobJunction</div>
        <ul className="flex space-x-2  sm:space-x-10 ">
          <li>
            <Link to="" className="hover:text-gray-300 text-sm">
              Home
            </Link>
          </li>
          <li>
            <Link to="about" className="hover:text-gray-300 text-sm">
              About
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
