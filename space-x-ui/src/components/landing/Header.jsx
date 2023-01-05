import React from "react";

export default function Header() {
  return (
    <div className="landing-bg h-screen w-screen  text-white">
      <div className="h-full w-full wrapper flex items-center justify-start">
        <div className="pl-10 w-full md:w-[30rem]">
          <h1 className="bold text-[5rem] uppercase">
            <span className="font-bolder block">Space</span>
            <span className="text-rocket-red hidden md:block">Travelers</span>
          </h1>
          <div className="text-gray-200">
            SpaceX's landing capsules are a marvel of modern engineering and a
            testament to the power of human innovation. Designed to safely
            transport humans and cargo to and from the International Space
            Station, these capsules have revolutionized the way we think about
            space travel.
          </div>
        </div>
      </div>
    </div>
  );
}
