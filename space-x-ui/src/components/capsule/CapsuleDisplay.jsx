import React, { useContext } from "react";
import { AppContext } from "../../context/AppContext";
import FilterBar from "../filter/FilterBar";
import Paginator from "../paginate/Paginator";
import Capsule from "./Capsule";

export default function CapsuleDisplay() {
  const {
    globalState: { capsules, currentPage },
  } = useContext(AppContext);

  return (
    <section className="bg-white my-20 wrapper">
      <h1 className="mb-4 text-[2rem]">Our Capsules</h1>
      <FilterBar />
      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
        {capsules[currentPage]?.map((capsule) => (
          <Capsule capsule={capsule} key={capsule.capsule_serial} />
        ))}
      </div>
      <Paginator />
    </section>
  );
}
