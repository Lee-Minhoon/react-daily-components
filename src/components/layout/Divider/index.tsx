import { ForwardedRef, forwardRef, useRef } from "react";
import { DivDefaultProps, WhiteSpaceProps } from "../../../types/props";
import type { StandardProperties } from "csstype";
import { Container, Label } from "./style";

const DIRECTIONS = {
  horizontal: "horizontal",
  vertical: "vertical",
} as const;
type Directions = keyof typeof DIRECTIONS;

interface DividerProps extends DivDefaultProps, WhiteSpaceProps {
  label?: string;
  direction?: Directions;
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
  (props: DividerProps, forwardedRef: ForwardedRef<HTMLDivElement>) => {
    const { direction, label } = props;
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
      margin: props.margin ?? props.m,
      padding: props.padding ?? props.p,

      ...border,

      ...props.style,
    };

    return (
      <Container height={labelRef.current?.clientHeight}>
        <div {...props} ref={forwardedRef} style={style} />
        <Label ref={labelRef}>{label}</Label>
      </Container>
    );
  }
);

export default Divider;
