import { createContext, useContext, useState } from "react";

const GlobalContext = createContext();


export default function ContextProvider({ children }) {
  const [signedIn, setSignedIn] = useState(false);
  const [showModal, setShowModal] = useState(false);
  return <GlobalContext.Provider value={{signedIn, setSignedIn, showModal, setShowModal}}>{children}</GlobalContext.Provider>;
}

export const GlobalStates = () => useContext(GlobalContext);