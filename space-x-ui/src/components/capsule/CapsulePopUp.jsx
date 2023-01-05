import React, { useContext } from "react";
import capsuleImg from "../../assets/images/capsule.jpg";
import { AppContext } from "../../context/AppContext";
import { formatDate } from "../../util/formatter.util";
import DisplayActiveInactive from "../status/DisplayActiveInactive";

export default function CapsulePopUp() {
  const {
    globalState: { selectedCapsule, showCapsulePop },
    updateGlobalState,
  } = useContext(AppContext);

  if (!showCapsulePop) {
    return <></>;
  }

  return (
    <div className="fixed top-0 left-0 right-0 bottom-0 bg-black bg-opacity-50 z-20 flex justify-center items-center">
      <div className="shadow-lg  w-full md:w-[50vw] p-4 relative grid grid-cols-2 bg-white">
        <div>
          <img src={capsuleImg} alt="" />
        </div>
        <div className="pt-10 relative">
          <button
            className="absolute top-10 right-10"
            onClick={() => updateGlobalState({ showCapsulePop: false })}
          >
            <i class="fa-solid fa-x "></i>
          </button>
          <strong className="text-gray-400">
            {selectedCapsule.capsule_serial}
          </strong>

          <div>
            <span className="bold uppercase  text-[0.8rem] font-bold mr-3">
              Type:
            </span>
            <span>{selectedCapsule.type}</span>
          </div>
          <div>
            <span className="bold uppercase  text-[0.8rem] font-bold mr-3">
              Original Launch:
            </span>
            <span>
              {formatDate(
                selectedCapsule.original_launch,
                "Do MMMM, YYYY h:mm a"
              )}
            </span>
          </div>
          <div>
            <span className="bold uppercase  text-[0.8rem] font-bold mr-3">
              Landings:
            </span>
            <span>{selectedCapsule.landings}</span>
          </div>
          <div>
            <span className="bold uppercase  text-[0.8rem] font-bold mr-3">
              Reused:
            </span>
            <span>{selectedCapsule.reuse_count} times</span>
          </div>

          <div className="mt-3">
            <DisplayActiveInactive status={selectedCapsule.status} />
          </div>
          <div className="mt-5">
            <h3 className="text-[1.3rem] font-bold">Missions</h3>
            <ol className="flex flex-col space-y-4">
              {selectedCapsule.missions.map((mission) => (
                <li>
                  <strong>Name: </strong>
                  {mission.name}. <strong>Flight: </strong> {mission.flight}
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
}
