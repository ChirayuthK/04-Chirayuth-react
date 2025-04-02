import React from "react";
import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <div className="w-auto h-min-screen my-12 mx-12  bg-gray-200 flex flex-col">
      <nav className="bg-gray-250 text-black font-bold p-4">
        <ul className="flex gap-4 justify-end mb-1">
          <li>
            <Link to="" className="hover:text-yellow-400">
              Home
            </Link>
          </li>
          <li>
            <Link to="" className="hover:text-yellow-400">
              Owner
            </Link>
          </li>
        </ul>
      </nav>
      <hr />
      <div className="p-6 max-w-4xl mx-auto w-full">
      </div>
    </div>
  );
};

export default Layout;