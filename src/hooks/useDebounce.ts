import { useEffect, useRef, useState } from "react";

const uesDebounce = (callback: () => void, timeout: number) => {
  const timerRef = useRef<any>(null);

  return () => {
    if (timerRef.current) clearTimeout(timerRef.current);

    timerRef.current = setTimeout(() => {
      callback();
      timerRef.current = null;
    }, timeout);
  };
};

export default uesDebounce;
