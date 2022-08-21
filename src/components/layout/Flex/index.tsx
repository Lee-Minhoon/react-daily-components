import { ForwardedRef, forwardRef } from "react";
import { DivDefaultProps } from "../../../types/props";
import type { StandardProperties } from "csstype";

interface FlexProps extends DivDefaultProps {
  width?: StandardProperties["width"];
  w?: StandardProperties["width"];
  height?: StandardProperties["height"];
  h?: StandardProperties["height"];
  margin?: StandardProperties["margin"];
  m?: StandardProperties["margin"];
  padding?: StandardProperties["padding"];
  p?: StandardProperties["padding"];
  direction?: StandardProperties["flexDirection"];
  d?: StandardProperties["flexDirection"];
  alignContent?: StandardProperties["alignContent"];
  ac?: StandardProperties["alignContent"];
  alignItems?: StandardProperties["alignItems"];
  ai?: StandardProperties["alignItems"];
  justifyContent?: StandardProperties["justifyContent"];
  jc?: StandardProperties["justifyContent"];
  wrap?: StandardProperties["flexWrap"];
  gap?: StandardProperties["gap"];
  columnGap?: StandardProperties["columnGap"];
  cg?: StandardProperties["columnGap"];
  rowGap?: StandardProperties["rowGap"];
  rg?: StandardProperties["rowGap"];
}

const Flex = forwardRef(
  (props: FlexProps, forwardedRef: ForwardedRef<HTMLDivElement>) => {
    const style: React.CSSProperties = {
      display: "flex",
      width: props.width ?? props.w,
      height: props.height ?? props.h,
      margin: props.margin ?? props.m,
      padding: props.padding ?? props.p,
      flexDirection: props.direction ?? props.d,
      alignContent: props.alignContent ?? props.ac,
      alignItems: props.alignItems ?? props.ai,
      justifyContent: props.justifyContent ?? props.jc,
      flexWrap: props.wrap,
      gap: props.gap,
      rowGap: props.rowGap ?? props.rg,
      columnGap: props.columnGap ?? props.cg,

      ...props.style,
    };
    return <div {...props} ref={forwardedRef} style={style} />;
  }
);

export default Flex;
