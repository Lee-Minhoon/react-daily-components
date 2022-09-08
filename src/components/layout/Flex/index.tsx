import { forwardRef } from "react";
import {
  ContainerPropsT,
  DivDefaultProps,
  DivForwardedRef,
} from "../../../types/props";
import type { StandardProperties } from "csstype";
import { getContainerProps } from "../../../utilities/props";

interface FlexProps extends DivDefaultProps, ContainerPropsT {
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
  gap?: StandardProperties["gap"];
  columnGap?: StandardProperties["columnGap"];
  cg?: StandardProperties["columnGap"];
  rowGap?: StandardProperties["rowGap"];
  rg?: StandardProperties["rowGap"];
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
    gap: props.gap,
    rowGap: props.rowGap ?? props.rg,
    columnGap: props.columnGap ?? props.cg,
    ...props.style,
  };

  return <div {...props} ref={forwardedRef} style={style} />;
});

export default Flex;
