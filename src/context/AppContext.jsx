import { createContext, useContext, useEffect, useState } from "react";
export const AppContext = createContext(null);

export const AppProvider = ({ children }) => {
  const [launches, setLaunches] = useState([]);

  useEffect(() => {
    Promise.all(
      fetch(`https://api.spacexdata.com/v3/rockets`, {
        method: "GET",
      }),
      fetch(`https://api.spacexdata.com/v3/launches`, {
        method: "GET",
      })
    )
      .then((r) => r.json())
      .then((data) => console.log(data))
      .catch((error) => {
        return error;
      });
  }, []);
  const context = { launches, setLaunches };

  return <AppContext.Provider value={context}>{children}</AppContext.Provider>;
};

export function useAppContext() {
  const context = AppContext;
  if (!context) {
    console.error("There is an error with explorer context");
  }
  return useContext(context);
}
