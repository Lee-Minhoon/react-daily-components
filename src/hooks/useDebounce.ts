import { useRef } from "react";

const uesDebounce = <T extends any[]>(
  callback: (...params: T) => void,
  timeout: number
) => {
  const timerRef = useRef<any>(null);

  return (...params: T) => {
    if (timerRef.current) clearTimeout(timerRef.current); // setTimeout을 제거함
    // 대기 시간이 지나기전에 콜백이 재 실행되면 clearTimeout에 의해서 아무것도 실행되지 않음

    timerRef.current = setTimeout(() => {
      callback(...params); // 대기 시간이 지나면 콜백을 실행함
      timerRef.current = null;
    }, timeout);
  };
};

export default uesDebounce;
