import { AppContextType, ProjectList } from "../types/index";
import { createContext, FC, useContext, useEffect, useState } from "react";
import axios from "axios";

const AppContext = createContext<AppContextType>({
  projects: [],
  setProjects: () => {},
});

export const AppProvider: FC = ({ children }) => {
  const [projects, setProjects] = useState<ProjectList[]>([]);
  useEffect(() => {
    axios.get(import.meta.env.VITE_API_URL as string).then((res) => setProjects(res.data.projects));
  }, []);
  return <AppContext.Provider value={{ projects, setProjects }}>{children}</AppContext.Provider>;
};

export const useAppContext = (): AppContextType => useContext(AppContext);
