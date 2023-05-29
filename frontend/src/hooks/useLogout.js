import { useAuthContext } from "./useAuthContext";
import { useChapterContext } from "./useChapterContext";

export const useLogout = () => {
  const { dispatch } = useAuthContext();
  const { dispatch: chapDispatch } = useChapterContext();

  const logout = () => {
    //remove user from storage
    localStorage.removeItem("user");

    //dipatch logout action
    dispatch({ type: "LOGOUT" });
    chapDispatch({ type: "SET_CHAPTERS", payload: null });
  };

  return { logout };
};
