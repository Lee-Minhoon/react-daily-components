/// <reference types="react" />
declare const useModal: () => {
    isOpen: boolean;
    setIsOpen: import("react").Dispatch<import("react").SetStateAction<boolean>>;
    handleOpenClick: () => void;
};
export default useModal;
