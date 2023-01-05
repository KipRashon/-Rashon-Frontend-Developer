import React, { useContext } from "react";
import { AppContext } from "../../context/AppContext";
import { formatDate } from "../../util/formatter.util";
import DisplayActiveInactive from "../status/DisplayActiveInactive";

export default function Capsule({ capsule }) {
  const { updateGlobalState } = useContext(AppContext);

  const onCapsuleClick = () => {
    updateGlobalState({
      selectedCapsule: capsule,
      showCapsulePop: true,
    });
  };

  return (
    <div
      className="shadow-md border-gray-300 border pt-2 px-3 pb-2 rounded relative group cursor-pointer"
      onClick={onCapsuleClick}
    >
      <strong className="text-gray-400">{capsule.capsule_serial}</strong>
      <div>{capsule.details || "Details about capsule coming soon..."}</div>
      <div>
        <span className="bold uppercase  text-[0.8rem] font-bold mr-3">
          Type:
        </span>
        <span>{capsule.type}</span>
      </div>
      <div>
        <span className="bold uppercase  text-[0.8rem] font-bold mr-3">
          Original Launch:
        </span>
        <span>
          {formatDate(capsule.original_launch, "Do MMMM, YYYY h:mm a")}
        </span>
      </div>
      <div className="mt-3">
        <DisplayActiveInactive status={capsule.status} />
      </div>
    </div>
  );
}
