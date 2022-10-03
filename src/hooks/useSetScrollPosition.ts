import { useEffect } from "react";

/**
 * Moves the scroll to the position
 * @param ref dom with scroll
 * @param position scroll position
 * @param active active
 */
const useSetScrollPosition = (
  ref: React.RefObject<HTMLElement>,
  position: number,
  active: boolean
) => {
  useEffect(() => {
    if (ref.current && active) {
      ref.current.scrollTop = position;
    }
  }, [active]);
};

export default useSetScrollPosition;
