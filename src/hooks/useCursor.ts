import React, { useEffect, useState } from "react";

const useCursor = (ref: React.RefObject<HTMLInputElement>, dependency: any) => {
  const [cursor, setCursor] = useState<number>(0);

  useEffect(() => {
    if (!ref.current) return;
    ref.current.selectionStart = cursor;
    ref.current.selectionEnd = cursor;
  }, [cursor, dependency]);

  return { cursor, setCursor };
};

export default useCursor;
