import { useCallback, useEffect, useRef, useState } from "react";

const useThrottle = <T extends any[]>(
  callback: (...params: T) => void,
  timeout: number
) => {
  const [ready, setReady] = useState<boolean>(true);
  const timerRef = useRef<any>();

  const throttledFunction = useCallback(
    (...params: T) => {
      if (!ready) return;
      setReady(false);
      callback(...params);
    },
    [ready, callback]
  );

  useEffect(() => {
    timerRef.current = setTimeout(() => {
      setReady(true);
    }, timeout);

    return () => {
      clearTimeout(timerRef.current);
    };
  }, [ready, timeout]);

  return throttledFunction;
};

export default useThrottle;
