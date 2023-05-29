import { ModuleContext } from "../context/ModuleContext";
import { useContext } from "react";

export const useModuleContext = () => {
  const context = useContext(ModuleContext);

  if (!context) {
    throw Error("useModuleContext must be used inside a ChapterModuleProvider");
  }

  return context;
};
