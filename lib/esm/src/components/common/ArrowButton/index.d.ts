declare const arrowDirection: {
    readonly Up: "Up";
    readonly Down: "Down";
    readonly Left: "Left";
    readonly Right: "Right";
};
declare type ARROW_DIRECTION = typeof arrowDirection[keyof typeof arrowDirection];
interface ArrowButtonProps {
    handleOpenClick: () => void;
    isOpen: boolean;
    outlineColor: string;
    outlineWidth: number;
    direction: ARROW_DIRECTION;
}
declare const ArrowButton: ({ handleOpenClick, isOpen, outlineColor, outlineWidth, direction, }: ArrowButtonProps) => import("@emotion/react/jsx-runtime").JSX.Element;
export default ArrowButton;
