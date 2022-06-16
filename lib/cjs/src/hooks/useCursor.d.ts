import React from "react";
declare const useCursor: (ref: React.RefObject<HTMLInputElement>, dependency: any) => {
    cursor: number;
    setCursor: React.Dispatch<React.SetStateAction<number>>;
};
export default useCursor;
