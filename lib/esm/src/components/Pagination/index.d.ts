/// <reference types="react" />
interface PaginationProps {
    currentPage: number;
    totalPages: number;
    block: number;
    handleClick: (targetPage: number) => void;
    isShowFirstAndLast?: boolean;
    isShowDeactiveButton?: boolean;
    width?: number;
    gap?: number;
    fontSize?: number;
    color?: string;
    containerStyle?: React.CSSProperties;
    firstPageRenderItem?: JSX.Element;
    prevPageRenderItem?: JSX.Element;
    nextPageRenderItem?: JSX.Element;
    lastPageRenderItem?: JSX.Element;
}
declare const Pagination: ({ currentPage, totalPages, block, handleClick, isShowFirstAndLast, isShowDeactiveButton, width, gap, fontSize, color, containerStyle, firstPageRenderItem, prevPageRenderItem, nextPageRenderItem, lastPageRenderItem, }: PaginationProps) => import("@emotion/react/jsx-runtime").JSX.Element;
export default Pagination;
