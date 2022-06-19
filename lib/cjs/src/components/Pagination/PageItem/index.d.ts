/// <reference types="react" />
interface PageItemProps {
    children: JSX.Element;
    activate: boolean;
    targetPage: number;
    handleClick: (targetPage: number) => void;
}
declare const PageItem: ({ children, activate, targetPage, handleClick, }: PageItemProps) => import("@emotion/react/jsx-runtime").JSX.Element;
export default PageItem;
