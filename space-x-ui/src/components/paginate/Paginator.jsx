import React, { useContext } from "react";
import { AppContext } from "../../context/AppContext";

export default function Paginator() {
  const {
    globalState: { capsules, currentPage },
    updateGlobalState,
  } = useContext(AppContext);

  const onBackwardClick = () => {
    let current = parseInt(currentPage);

    if (currentPage <= 1) {
      return;
    }

    updateGlobalState({ currentPage: current - 1 });
  };

  const onForwardClick = () => {
    let current = parseInt(currentPage);

    if (!capsules[current + 1]) {
      return;
    }

    updateGlobalState({ currentPage: current + 1 });
  };

  return (
    <div
      className="w-full flex justify-center items-center my-10
    "
    >
      <div className="flex space-x-3 items-center">
        <button
          className="border border-gray-300 shadow-sm px-3 py-1"
          onClick={onBackwardClick}
        >
          <i className="fa-solid fa-backward"></i>
        </button>
        {Object.keys(capsules).map((page) => (
          <button
            className={`border border-gray-300 shadow-sm ${
              parseInt(page) === parseInt(currentPage)
                ? "bg-rocket-red text-white"
                : "bg-white"
            } h-[40px] w-[40px] flex justify-center items-center rounded-full`}
            onClick={() => updateGlobalState({ currentPage: page })}
            key={`page-item-${page}`}
          >
            {page}
          </button>
        ))}

        <button
          className="border border-gray-300 shadow-sm px-3 py-1"
          onClick={onForwardClick}
        >
          <i className="fa-solid fa-forward"></i>
        </button>
      </div>
    </div>
  );
}
