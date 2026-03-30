import { createContext, useContext, useState } from "react";

interface Props {
  children: React.ReactNode;
}

/**
 * I'm using a controller to not have to pass states through all the components. It starts with a _ because it's private
 * */
export const _useController = () => {
  const [language, setLanguage] = useState("BR");
  return { language, setLanguage };
};

const controller = createContext({} as ReturnType<typeof _useController>);

export const useContextProject = () => useContext(controller);

export const ContextProvider: React.FC<Props> = ({ children }) => {
  const useController = _useController();
  return (
    <controller.Provider value={useController}>{children}</controller.Provider>
  );
};
