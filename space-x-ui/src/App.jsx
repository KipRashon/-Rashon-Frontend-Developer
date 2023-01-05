import { useEffect, useState } from "react";
import Banner from "./components/banner/Banner";
import CapsuleDisplay from "./components/capsule/CapsuleDisplay";
import CapsulePopUp from "./components/capsule/CapsulePopUp";
import Header from "./components/landing/Header";
import NavigationDrawer from "./components/navigation/NavigationDrawer";
import { ITEMS_PER_PAGE } from "./constants/global.constants";
import { AppContext, DEFAULT_GLOBAL_STATE } from "./context/AppContext";
import { formatUrl } from "./util/formatter.util";

function App() {
  const [globalState, setGlobalState] = useState(DEFAULT_GLOBAL_STATE);

  const updateGlobalState = (updateObj) => {
    setGlobalState({ ...globalState, ...updateObj });
  };

  const paginateCapsules = (capsules) => {
    const paginated = {
      1: [],
    };
    let pageCount = 1;

    capsules.forEach((capsule) => {
      paginated[pageCount].push(capsule);

      if (paginated[pageCount].length >= ITEMS_PER_PAGE) {
        pageCount += 1;
        paginated[pageCount] = [];
      }
    });

    if (paginated[pageCount].length === 0) {
      delete paginated[pageCount];
    }

    updateGlobalState({
      capsules: paginated,
      currentPage: 1,
    });
  };

  const fetchCapsules = () => {
    // updateGlobalState({ apiLoading: true });
    fetch(formatUrl("/capsules.php", globalState.capsuleFilters))
      .then((res) => res.json())
      .then((res) => {
        paginateCapsules(res.capsules);
      })
      .catch((err) => {
        //send error to sentry
        console.log(err);
      });
    // .finally(() => {
    //   updateGlobalState({ apiLoading: false });
    // });
  };

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(fetchCapsules, [globalState.capsuleFilters]);

  return (
    <AppContext.Provider
      value={{
        globalState,
        updateGlobalState,
      }}
    >
      <div className="relative">
        <NavigationDrawer />
        <Banner />
        <Header />
        <CapsuleDisplay />
        <CapsulePopUp />
      </div>
    </AppContext.Provider>
  );
}

export default App;
