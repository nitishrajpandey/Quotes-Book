import React from "react";
import { logo } from "../../assets/index";
import { navLinkData } from "../contextData/index";
import { NavLink } from "react-router-dom";
function Header() {
  return (
    <div className="bg-[#F0F0F0]  flex items-center py-2 px-10 shadow-lg sticky top-0 w-full ">
      <div className="flex flex-col sm:flex-row justify-between items-center gap-4   w-full">
        <div className="w-[90px]">
          <img src={logo} alt="logo" className=" rounded-full" />
        </div>
        <div className="my-3">
          <ul className="flex gap-5  ">
            {navLinkData.map((nav) => (
              <li key={nav.id} className="font-semibold text-xl">
                <NavLink
                  to={nav.active}
                  className={({ isActive }) => `${isActive && "text-blue-900"}`}
                >
                  {nav.title}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Header;
