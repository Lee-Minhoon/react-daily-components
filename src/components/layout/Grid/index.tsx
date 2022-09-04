import { ForwardedRef, forwardRef } from "react";
import { ContainerPropsT, DivDefaultProps } from "../../../types/props";
import type { StandardProperties } from "csstype";

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

const Grid = forwardRef(
  (props: GridProps, forwardedRef: ForwardedRef<HTMLDivElement>) => {
    const style: React.CSSProperties = {
      display: "grid",
      width: props.width ?? props.w,
      height: props.height ?? props.h,
      maxWidth: props.maxWidth ?? props.mw,
      maxHeight: props.maxHeight ?? props.mh,
      margin: props.margin ?? props.m,
      padding: props.padding ?? props.p,
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
  }
);

export default Grid;
