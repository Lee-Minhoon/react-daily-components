import { useEffect } from "react";

/**
 * Moves the scroll to the position
 * @param ref dom with scroll
 * @param position scroll position
 * @param dependency dependency
 */
const useSetScrollPosition = (
  ref: React.RefObject<HTMLElement>,
  position: number,
  dependency: any
) => {
  useEffect(() => {
    if (ref.current) ref.current.scrollTop = position;
  }, [dependency]);
};

export default useSetScrollPosition;
