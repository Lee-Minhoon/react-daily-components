import { useCallback, useEffect, useRef, useState } from "react";

const useThrottle = <T extends any[]>(
  callback: (...params: T) => void,
  timeout: number
) => {
  const [ready, setReady] = useState<boolean>(true); // ready 상태에서만 콜백이 실행됨
  const timerRef = useRef<any>();

  const throttledFunction = useCallback(
    (...params: T) => {
      if (!ready) return; // ready 상태가 아니면 아무것도 실행하지 않음
      setReady(false); // ready 상태이면 다시 false로 바꾸고
      callback(...params); // 콜백을 실행함
    },
    [ready, callback]
  );

  useEffect(() => {
    timerRef.current = setTimeout(() => {
      setReady(true); // 대기 시간이 지나면 ready 상태를 true로 바꿈
    }, timeout);

    return () => {
      clearTimeout(timerRef.current);
    };
  }, [ready, timeout]);

  return throttledFunction;
};

export default useThrottle;
