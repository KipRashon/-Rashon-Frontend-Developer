import React, { useContext } from "react";
import { AppContext } from "../../context/AppContext";

export default function NavigationDrawer() {
  const { updateGlobalState, globalState } = useContext(AppContext);

  if (!globalState.showNavigationDrawer) {
    return <></>;
  }

  return (
    <div className="absolute top-0 bottom-0  rounded-sm min-h-screen shadow-lg  flex justify-center items-center right-0 w-full bg-white z-10">
      <button
        className="absolute top-10 right-10"
        onClick={() => updateGlobalState({ showNavigationDrawer: false })}
      >
        <i class="fa-solid fa-x "></i>
      </button>
      <ul className="flex flex-col space-y-5 text-[1.3rem]">
        <li>Home</li>
        <li>Service</li>
        <li>About us</li>
        <li>Contact</li>
      </ul>
    </div>
  );
}
