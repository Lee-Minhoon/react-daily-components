import { forwardRef } from "react";
import { ButtonDefaultProps, ButtonForwardedRef } from "../../../types/props";
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

interface ArrowButtonProps extends ButtonDefaultProps {
  direction: ARROW_DIRECTION;
}

const ArrowButton = forwardRef(
  (props: ArrowButtonProps, forwardedRef: ButtonForwardedRef) => {
    const { direction } = props;

    return (
      <Style.Button ref={forwardedRef} {...props}>
        <Style.Svg viewBox="0 0 20 20">
          <polyline points={points[direction]} />
        </Style.Svg>
      </Style.Button>
    );
  }
);

export default ArrowButton;
