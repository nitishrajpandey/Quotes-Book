import React from "react";
import { logo } from "../../assets/index";
import { navLinkData } from "../contextData/index";
import { NavLink } from "react-router-dom";
function Header() {
  return (
    <div className="border border-green-700 bg-green-400 h-[100px] flex items-center py-2 px-5 ">
      <div className="flex justify-between items-center border border-red-800  w-full">
        <div className="w-[90px]">
          <img src={logo} alt="logo" className=" rounded-full" />
        </div>
        <div>
          <ul className="flex gap-5 ">
            {navLinkData.map((nav) => (
              <li key={nav.id}>
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
