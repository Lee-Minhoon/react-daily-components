import * as Style from "./style";

const arrowDirection = {
  Up: "Up",
  Down: "Down",
  Left: "Left",
  Right: "Right",
} as const;
type ARROW_DIRECTION = typeof arrowDirection[keyof typeof arrowDirection];

const points = {
  Up: "2 14 10 6 18 14 10 6",
  Down: "2 6 10 14 18 6 10 14",
  Left: "14 2 6 10 14 18 6 10",
  Right: "6 2 14 10 6 18 14 10",
};

interface ArrowButtonProps {
  handleOpenClick: () => void;
  isOpen: boolean;
  outlineColor: string;
  outlineWidth: number;
  direction: ARROW_DIRECTION;
}

const ArrowButton = ({
  handleOpenClick,
  isOpen,
  outlineColor,
  outlineWidth,
  direction,
}: ArrowButtonProps) => {
  return (
    <Style.Button onClick={handleOpenClick}>
      <Style.Svg
        viewBox="0 0 20 20"
        isOpen={isOpen}
        outlineColor={outlineColor}
        outlineWidth={outlineWidth}
      >
        <polyline points={points[direction]} />
      </Style.Svg>
    </Style.Button>
  );
};

export default ArrowButton;
