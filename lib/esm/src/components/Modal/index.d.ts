/// <reference types="react" />
import { ContainerProps } from "../../types/props";
interface ModalProps extends ContainerProps {
    title: string;
    children: JSX.Element | string;
    handleConfirmClick: () => void;
    handleCancelClick: () => void;
    isFullScreen?: boolean;
    isBlockedBackground?: boolean;
    backgroundColor?: string;
}
declare const Modal: ({ title, children, handleConfirmClick, handleCancelClick, isFullScreen, isBlockedBackground, width, height, fontSize, textColor, borderRadius, outlineWidth, outlineColor, backgroundColor, }: ModalProps) => import("@emotion/react/jsx-runtime").JSX.Element;
export default Modal;
