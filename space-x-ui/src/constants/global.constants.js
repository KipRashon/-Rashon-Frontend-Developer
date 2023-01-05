export const API_BASE_URL = "http://localhost/space-x-backend";

export const CAPSULE_STATUS = {
  active: {
    display: "Active",
    badgeColor: "bg-green-400",
  },
  unknown: {
    display: "Unknown",
    badgeColor: "bg-rocket-red",
  },
  retired: {
    display: "Retired",
    badgeColor: "bg-gray-400",
  },
  destroyed: {
    display: "Destroyed",
    badgeColor: "bg-rocket-red",
  },
};

export const CAPSULE_TYPES = [
  "Dragon 1.0",
  "Dragon 1.1",
  "Dragon 2.0",
  "Dragon 2.1",
  "Dragon 2.2",
];

export const ITEMS_PER_PAGE = 10;
