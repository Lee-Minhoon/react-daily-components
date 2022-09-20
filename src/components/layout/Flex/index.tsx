import { forwardRef } from "react";
import {
  ContainerPropsT,
  DivDefaultProps,
  DivForwardedRef,
} from "../../../types/props";
import type { StandardProperties } from "csstype";
import { getContainerProps } from "../../../utilities/props";
import { Container } from "./style";

export interface FlexProps extends DivDefaultProps, ContainerPropsT {
  flex?: StandardProperties["flex"];
  direction?: StandardProperties["flexDirection"];
  d?: StandardProperties["flexDirection"];
  alignContent?: StandardProperties["alignContent"];
  ac?: StandardProperties["alignContent"];
  alignItems?: StandardProperties["alignItems"];
  ai?: StandardProperties["alignItems"];
  justifyContent?: StandardProperties["justifyContent"];
  jc?: StandardProperties["justifyContent"];
  wrap?: StandardProperties["flexWrap"];
  columnGap?: StandardProperties["columnGap"];
  cg?: StandardProperties["columnGap"];
  rowGap?: StandardProperties["rowGap"];
  rg?: StandardProperties["rowGap"];
  gap?: StandardProperties["gap"];
}

const Flex = forwardRef((props: FlexProps, forwardedRef: DivForwardedRef) => {
  const style: React.CSSProperties = {
    display: "flex",
    ...getContainerProps(props),
    flex: props.flex,
    flexDirection: props.direction ?? props.d,
    alignContent: props.alignContent ?? props.ac,
    alignItems: props.alignItems ?? props.ai,
    justifyContent: props.justifyContent ?? props.jc,
    flexWrap: props.wrap,
    rowGap: props.rowGap ?? props.rg,
    columnGap: props.columnGap ?? props.cg,
    gap: props.gap,
    ...props.style,
  };

  return <Container {...props} ref={forwardedRef} style={style} />;
});

export default Flex;
