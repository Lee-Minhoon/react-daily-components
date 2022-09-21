import { forwardRef, useRef } from "react";
import type { StandardProperties } from "csstype";
import { DivDefaultProps, DivForwardedRef, WhiteSpaceProps } from "types/props";
import { getWhiteSpaceProps } from "utilities/props";
import * as Styled from "./style";

const DIRECTIONS = {
  horizontal: "horizontal",
  vertical: "vertical",
} as const;
type Directions = keyof typeof DIRECTIONS;

interface DividerProps extends DivDefaultProps, WhiteSpaceProps {
  direction?: Directions;
  label?: string;
  labelStyle?: React.CSSProperties;
  borderStyle?:
    | StandardProperties["borderTopStyle"]
    | StandardProperties["borderRightStyle"];
  bs?:
    | StandardProperties["borderTopStyle"]
    | StandardProperties["borderRightStyle"];
  borderColor?:
    | StandardProperties["borderTopColor"]
    | StandardProperties["borderRightColor"];
  bc?:
    | StandardProperties["borderTopColor"]
    | StandardProperties["borderRightColor"];
  borderWidth?:
    | StandardProperties["borderTopWidth"]
    | StandardProperties["borderRightWidth"];
  bw?:
    | StandardProperties["borderTopWidth"]
    | StandardProperties["borderRightWidth"];
}

const Divider = forwardRef(
  (props: DividerProps, forwardedRef: DivForwardedRef) => {
    const { direction, label, labelStyle } = props;
    const labelRef = useRef<HTMLSpanElement>(null);

    const border =
      direction === "horizontal"
        ? {
            borderTopStyle: props.borderStyle ?? props.bs ?? "solid",
            borderTopColor: props.borderColor ?? props.bc ?? "gray",
            borderTopWidth: props.borderWidth ?? props.bw ?? "1px",
          }
        : {
            borderRightStyle: props.borderStyle ?? props.bs ?? "solid",
            borderRightColor: props.borderColor ?? props.bc ?? "gray",
            borderRightWidth: props.borderWidth ?? props.bw ?? "1px",
          };

    const style: React.CSSProperties = {
      width: direction === "horizontal" ? "100%" : props.borderWidth,
      height: props.direction === "horizontal" ? "initial" : "100%",
      ...getWhiteSpaceProps(props),
      ...border,
      ...props.style,
    };

    return (
      <Styled.Container height={labelRef.current?.clientHeight}>
        <div {...props} ref={forwardedRef} style={style} />
        <Styled.Label ref={labelRef} style={labelStyle}>
          {label}
        </Styled.Label>
      </Styled.Container>
    );
  }
);

export default Divider;
