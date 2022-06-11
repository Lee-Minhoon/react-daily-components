import { useEffect } from "react";

const useClickOutside = (
  ref: React.RefObject<HTMLElement>,
  handler: (close: boolean) => void
) => {
  useEffect(() => {
    const checkIfClickedOutside = (e: any) => {
      if (!ref.current || !ref.current?.contains(e.target)) {
        handler(false);
      }
    };
    document.addEventListener("mousedown", checkIfClickedOutside);
    return () => {
      document.removeEventListener("mousedown", checkIfClickedOutside);
    };
  }, [ref, handler]);
};

export default useClickOutside;
