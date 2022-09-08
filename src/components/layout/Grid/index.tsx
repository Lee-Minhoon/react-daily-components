import { forwardRef } from "react";
import {
  ContainerPropsT,
  DivDefaultProps,
  DivForwardedRef,
} from "../../../types/props";
import type { StandardProperties } from "csstype";
import { getContainerProps } from "../../../utilities/props";

interface GridProps extends DivDefaultProps, ContainerPropsT {
  autoColumns?: StandardProperties["gridAutoColumns"];
  gac?: StandardProperties["gridAutoColumns"];
  autoRows?: StandardProperties["gridAutoRows"];
  gar?: StandardProperties["gridAutoRows"];
  autoFlow?: StandardProperties["gridAutoFlow"];
  gaf?: StandardProperties["gridAutoFlow"];
  templateColumns?: StandardProperties["gridTemplateColumns"];
  gtc?: StandardProperties["gridTemplateColumns"];
  templateRows?: StandardProperties["gridTemplateRows"];
  gtr?: StandardProperties["gridTemplateRows"];
  templateArea?: StandardProperties["gridTemplateAreas"];
  gta?: StandardProperties["gridTemplateAreas"];
  alignContent?: StandardProperties["alignContent"];
  ac?: StandardProperties["alignContent"];
  alignItems?: StandardProperties["alignItems"];
  ai?: StandardProperties["alignItems"];
  justifyContent?: StandardProperties["justifyContent"];
  jc?: StandardProperties["justifyContent"];
  gap?: StandardProperties["gap"];
  columnGap?: StandardProperties["columnGap"];
  cg?: StandardProperties["columnGap"];
  rowGap?: StandardProperties["rowGap"];
  rg?: StandardProperties["rowGap"];
}

const Grid = forwardRef((props: GridProps, forwardedRef: DivForwardedRef) => {
  const style: React.CSSProperties = {
    display: "grid",
    ...getContainerProps(props),
    gridAutoColumns: props.autoColumns ?? props.gac,
    gridAutoRows: props.autoRows ?? props.gar,
    gridAutoFlow: props.autoFlow ?? props.gaf,
    gridTemplateColumns: props.templateColumns ?? props.gtc,
    gridTemplateRows: props.templateRows ?? props.gtr,
    gridTemplateAreas: props.templateArea ?? props.gta,
    alignContent: props.alignContent ?? props.ac,
    alignItems: props.alignItems ?? props.ai,
    justifyContent: props.justifyContent ?? props.jc,
    gap: props.gap,
    rowGap: props.rowGap ?? props.rg,
    columnGap: props.columnGap ?? props.cg,
    ...props.style,
  };

  return <div {...props} ref={forwardedRef} style={style} />;
});

export default Grid;
