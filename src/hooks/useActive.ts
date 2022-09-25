import { useCallback, useState } from "react";

const useActive = () => {
  const [active, setActive] = useState<boolean>(false);

  const handleActive = useCallback(() => {
    setActive((prev) => !prev);
  }, []);

  return { active, setActive, handleActive };
};

export default useActive;
