import React, { useContext } from "react";
import logo from "../../assets/images/logo.png";
import { AppContext } from "../../context/AppContext";

export default function Banner() {
  const { updateGlobalState } = useContext(AppContext);

  return (
    <div className="wrapper bg-transparent flex justify-between absolute top-0 w-full text-white items-center">
      <img src={logo} alt="" height={200} width={200} />
      <ul className=" hidden lg:flex  space-x-5 text-[1.3rem]">
        <li className="border-b border-transparent cursor-pointer hover:border-white">
          Home
        </li>
        <li className="border-b border-transparent cursor-pointer hover:border-white">
          Service
        </li>
        <li className="border-b border-transparent cursor-pointer hover:border-white">
          About us
        </li>
        <li className="border-b border-transparent cursor-pointer hover:border-white">
          Contact
        </li>
      </ul>

      <button className="bg-rocket-red px-3 py-1 lg:block hidden">Login</button>

      <button
        onClick={() =>
          updateGlobalState({
            showNavigationDrawer: true,
          })
        }
        className="block lg:hidden"
      >
        <i className="fa-solid fa-bars"></i>
      </button>
    </div>
  );
}
