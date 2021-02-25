import { createContext, useContext, useEffect, useState } from "react";
import { CircularProgress, Typography } from "@material-ui/core";

import { useFetch } from "../hooks";
import { CardItemType } from "../types";

type AppContextType = {
  featured: CardItemType[];
  popular: CardItemType[];
  filteredPopular: CardItemType[];
  setFilteredPopular: (values: CardItemType[]) => void;
};
const AppContext = createContext<AppContextType>({
  featured: [],
  filteredPopular: [],
  popular: [],
  setFilteredPopular: () => {},
});
export const useAppContext = () => useContext(AppContext);

export function AppContextProvider({ children }: { children: JSX.Element }) {
  const [filteredPopular, setFilteredPopular] = useState<CardItemType[]>([]);
  const { data: featured, loading, error } = useFetch(
    "https://demo3136867.mockable.io/featured"
  );
  const {
    data: popular,
    loading: loadingPopular,
    error: loadingError,
  } = useFetch("https://demo3136867.mockable.io/featured");

  useEffect(() => {
    if (popular.length) {
      setFilteredPopular(popular);
    }
  }, [popular]);

  if (loading || loadingPopular) {
    return <CircularProgress size={40} />;
  }
  if (error || loadingError) {
    return <Typography>{error || loadingError}</Typography>;
  }

  return (
    <AppContext.Provider
      value={{ featured, popular, filteredPopular, setFilteredPopular }}
    >
      {children}
    </AppContext.Provider>
  );
}
