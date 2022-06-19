import { useRef } from "react";

const uesDebounce = <T extends any[]>(
  callback: (...params: T) => void,
  timeout: number
) => {
  const timerRef = useRef<any>(null);

  return (...params: T) => {
    if (timerRef.current) clearTimeout(timerRef.current);

    timerRef.current = setTimeout(() => {
      callback(...params);
      timerRef.current = null;
    }, timeout);
  };
};

export default uesDebounce;
