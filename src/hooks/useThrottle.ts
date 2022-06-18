import { useCallback, useEffect, useRef, useState } from "react";

const useThrottle = (callback: () => void, timeout: number) => {
  const [ready, setReady] = useState<boolean>(true);
  const timerRef = useRef<any>();

  const throttledFunction = useCallback(() => {
    if (!ready) return;
    setReady(false);
    callback();
  }, [ready, callback]);

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
