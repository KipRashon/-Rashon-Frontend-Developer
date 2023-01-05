import React, { useContext } from "react";
import {
  CAPSULE_STATUS,
  CAPSULE_TYPES,
} from "../../constants/global.constants";
import { AppContext } from "../../context/AppContext";

export default function FilterBar() {
  const {
    globalState: { capsuleFilters },
    updateGlobalState,
  } = useContext(AppContext);

  const onCapsuleFilterChange = (changeObj) => {
    updateGlobalState({
      capsuleFilters: {
        ...capsuleFilters,
        ...changeObj,
      },
    });
  };

  return (
    <div className="flex flex-col lg:flex-row space-y-5 lg:space-y-0 space-x-0 lg:space-x-10">
      <div className="flex space-x-2 items-center">
        <label htmlFor="">Type</label>
        <select
          name=""
          id=""
          className="px-5 py-2 cursor-pointer focus:outline-none border-2 rounded-md border-gray-400 bg-white"
          value={capsuleFilters.type}
          onChange={(e) => onCapsuleFilterChange({ type: e.target.value })}
        >
          <option value="">Select</option>
          {CAPSULE_TYPES.map((capsuleType) => (
            <option key={capsuleType}>{capsuleType}</option>
          ))}
        </select>
      </div>
      <div className="flex space-x-2 items-center">
        <label htmlFor="">Status</label>
        <select
          name=""
          id=""
          className="px-5 py-2 cursor-pointer focus:outline-none border-2 rounded-md border-gray-400 bg-white"
          value={capsuleFilters.status}
          onChange={(e) => onCapsuleFilterChange({ status: e.target.value })}
        >
          <option value="">Select</option>
          {Object.keys(CAPSULE_STATUS).map((statusKey) => (
            <option value={statusKey} key={statusKey}>
              {CAPSULE_STATUS[statusKey].display}
            </option>
          ))}
        </select>
      </div>
      <div className="flex space-x-2 items-center">
        <label htmlFor="">Landings</label>
        <input
          type="number"
          className="px-5 py-2 cursor-pointer focus:outline-none border-2 rounded-md border-gray-400 bg-white"
          onChange={(e) => onCapsuleFilterChange({ landings: e.target.value })}
        />
      </div>
    </div>
  );
}
