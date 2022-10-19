import { useRef } from "react";

const useThrottle = <T extends any[]>(
  callback: (...params: T) => void,
  timeout: number
) => {
  const ready = useRef<boolean>(true);
  const timerRef = useRef<any>();

  return (...params: T) => {
    if (ready.current) {
      clearTimeout(timerRef.current);
      callback(...params); // 콜백을 실행하고
      ready.current = false; // ready 상태를 false로 바꿈
      timerRef.current = setTimeout(() => {
        ready.current = true; // 대기 시간이 지나면 ready 상태를 true로 바꿈
      }, timeout);
    }
  };
};

export default useThrottle;
