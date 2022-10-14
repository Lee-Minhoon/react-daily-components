import { forwardRef, useRef } from "react";
import type { StandardProperties } from "csstype";
import { DivDefaultProps, DivForwardedRef } from "../../../types/props";
import * as Styled from "./style";
import * as StyleProps from "../../../types/props/style";
import { getStyleProps } from "../../../utilities/props";

const DIRECTIONS = {
  horizontal: "horizontal",
  vertical: "vertical",
} as const;
type Directions = keyof typeof DIRECTIONS;

interface DividerProps extends DivDefaultProps, StyleProps.CommonAbbrProps {
  direction?: Directions;
  label?: string;
  labelStyle?: React.CSSProperties;
  borderStyle?:
    | StandardProperties["borderTopStyle"]
    | StandardProperties["borderRightStyle"];
  borderColor?:
    | StandardProperties["borderTopColor"]
    | StandardProperties["borderRightColor"];
  borderWidth?:
    | StandardProperties["borderTopWidth"]
    | StandardProperties["borderRightWidth"];
}

/**
 * Divider Component
 */
const Divider = forwardRef(
  (
    props: DividerProps & StyleProps.AllProperties,
    forwardedRef: DivForwardedRef
  ) => {
    const { direction, label, labelStyle } = props;
    const labelRef = useRef<HTMLSpanElement>(null);

    const border =
      direction === "horizontal"
        ? {
            borderTopStyle: props.borderStyle ?? "solid",
            borderTopColor: props.borderColor ?? "gray",
            borderTopWidth: props.borderWidth ?? "1px",
          }
        : {
            borderRightStyle: props.borderStyle ?? "solid",
            borderRightColor: props.borderColor ?? "gray",
            borderRightWidth: props.borderWidth ?? "1px",
          };

    const style: React.CSSProperties = {
      width: direction === "horizontal" ? "100%" : props.borderWidth,
      height: props.direction === "horizontal" ? "initial" : "100%",
      ...border,
      ...props.style,
    };

    return (
      <Styled.Container
        height={labelRef.current?.clientHeight}
        style={getStyleProps(props)}
      >
        <div {...props} ref={forwardedRef} style={style} />
        <Styled.Label ref={labelRef} style={labelStyle}>
          {label}
        </Styled.Label>
      </Styled.Container>
    );
  }
);

export default Divider;
