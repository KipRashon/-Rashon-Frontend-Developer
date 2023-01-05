import { createContext } from "react";

export const DEFAULT_GLOBAL_STATE = {
  showNavigationDrawer: false,
  capsules: {},
  showCapsulePop: false,
  selectedCapsule: {
    missions: [],
  },
  apiLoading: false,
  currentPage: 1,
  capsuleFilters: {
    status: "",
    original_launch: "",
    type: "",
    landings: "",
  },
};

export const AppContext = createContext({
  globalState: DEFAULT_GLOBAL_STATE,
  updateGlobalState: () => {},
});
