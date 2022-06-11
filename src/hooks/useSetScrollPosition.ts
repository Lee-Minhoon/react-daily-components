import { useEffect } from "react";

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
