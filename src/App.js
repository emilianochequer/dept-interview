import { createContext, useContext, useEffect, useState } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import { LaunchesListPage } from "./pages/launchesList";
import { LaunchesFavoritesPage } from "./pages/launchesFavorites";
import { LaunchDetailPage } from "./pages/launchDetail";
import { useLocalStorage } from "./hooks/useLocalStorage";

export const AppContext = createContext(null);

function App() {
  const [launches, setLaunches] = useState([]);
  const [favorites, setFavorites] = useLocalStorage("favorites", []);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredLaunches, setFilteredLaunches] = useState([]);
  const [selectedLaunch, setSelectedLaunch] = useState(null);

  const [pagination, setPagination] = useState({
    limit: 20,
    total: 0,
    start: 0,
    page: 1,
    perPage: 20,
    showPrevButton: false,
    showFirstPageButton: false,
    showNextButton: false,
    showLastPageButton: false,
  });

  useEffect(() => {
    const rockets = fetch(`https://api.spacexdata.com/v3/rockets`, {
      method: "GET",
    }).then((r) => r.json());

    const launches = fetch(`https://api.spacexdata.com/v3/launches`, {
      method: "GET",
    }).then((r) => r.json());

    Promise.all([launches, rockets])
      .then((data) => {
        setPagination((prevState) => ({ ...prevState, total: data[0].length }));
        setLaunches(
          [...data[0]].map((launch) => {
            return {
              flight_number: launch.flight_number,
              mission_name: launch.mission_name,
              launch_date_unix: launch.launch_date_unix,
              details: launch.details,
              mission_patch: [...data[1]].find(
                (rocket) => rocket.rocket_id === launch.rocket.rocket_id
              ).flickr_images[0],
              patch: launch.links.mission_patch,
              rocket: {
                rocket_id: launch.rocket.rocket_id,
                rocket_name: launch.rocket.rocket_name,
                active: [...data[1]].find(
                  (rocket) => rocket.rocket_id === launch.rocket.rocket_id
                ).active,
                cost_per_launch: [...data[1]].find(
                  (rocket) => rocket.rocket_id === launch.rocket.rocket_id
                ).cost_per_launch,
                first_stage: [...data[1]].find(
                  (rocket) => rocket.rocket_id === launch.rocket.rocket_id
                ).first_stage,
                second_stage: [...data[1]].find(
                  (rocket) => rocket.rocket_id === launch.rocket.rocket_id
                ).second_stage,
                payload_weights: [...data[1]].find(
                  (rocket) => rocket.rocket_id === launch.rocket.rocket_id
                ).payload_weights,
                mass: [...data[1]].find(
                  (rocket) => rocket.rocket_id === launch.rocket.rocket_id
                ).mass,
                diameter: [...data[1]].find(
                  (rocket) => rocket.rocket_id === launch.rocket.rocket_id
                ).diameter,
                height: [...data[1]].find(
                  (rocket) => rocket.rocket_id === launch.rocket.rocket_id
                ).height,
              },
            };
          })
        );
      })
      .catch((error) => {
        return error;
      });
  }, []);

  const context = {
    launches,
    favorites,
    setFavorites,
    pagination,
    setPagination,
    searchTerm,
    setLaunches,
    setSearchTerm,
    filteredLaunches,
    setFilteredLaunches,
    selectedLaunch,
    setSelectedLaunch,
  };

  return (
    <div className="App">
      <AppContext.Provider value={context}>
        <Routes>
          <Route index element={<LaunchesListPage />} />
          <Route path="/favorites" element={<LaunchesFavoritesPage />} />
          <Route path="/detail" element={<LaunchDetailPage />} />
        </Routes>
      </AppContext.Provider>
    </div>
  );
}

export function useAppContext() {
  const context = AppContext;
  if (!context) {
    console.error("There is an error with explorer context");
  }
  return useContext(context);
}

export default App;
