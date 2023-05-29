import { useReducer } from "react";
import { createContext } from "react";

export const ModuleContext = createContext();

export const moduleReducer = (state, action) => {
  switch (action.type) {
    case "SET_MODULE":
      return {
        module: action.payload,
      };
    case "CREATE_MODULE":
      return {
        module: [action.payload, ...state.module],
      };
    default:
      return state;
  }
};

export const ModuleContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(moduleReducer, {
    module: null,
  });

  return (
    <ModuleContext.Provider value={{ ...state, dispatch }}>
      {children}
    </ModuleContext.Provider>
  );
};
