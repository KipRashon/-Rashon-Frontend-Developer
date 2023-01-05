import React from "react";
import { CAPSULE_STATUS } from "../../constants/global.constants";

export default function DisplayActiveInactive({ status }) {
  let statusDetails = CAPSULE_STATUS[status];

  if (!statusDetails) {
    return <>{status}</>;
  }

  return (
    <span
      className={`${statusDetails.badgeColor} py-[0.2rem] px-2 rounded-lg text-white`}
    >
      {statusDetails.display}
    </span>
  );
}
