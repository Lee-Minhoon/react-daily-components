/// <reference types="react" />
declare const useInput: (initialValue: any) => {
    value: any;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    setValue: import("react").Dispatch<any>;
};
export default useInput;
