/// <reference types="react" />
declare const useInput: (initialValue: string) => {
    value: string;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    setValue: import("react").Dispatch<import("react").SetStateAction<string>>;
};
export default useInput;
