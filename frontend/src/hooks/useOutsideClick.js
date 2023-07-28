import { useEffect } from "react";

export function useOutsideClick(ref, onClickOut, deps = []) {
  useEffect(() => {
    const onClick = ({ target }) => {
      const isExcluded = target.closest(".hame");

      if (!ref?.contains(target) && !isExcluded) {
        onClickOut?.();
      }
    };
    document.addEventListener("click", onClick);

    return () => document.removeEventListener("click", onClick);
  }, [onClickOut]);
}
