import { ForwardedRef, forwardRef } from "react";
import { ElementProps, HeadingDefaultProps } from "../../../types/props";
import type { StandardProperties } from "csstype";

const LEVEL = {
  1: "h1",
  2: "h2",
  3: "h3",
  4: "h4",
  5: "h5",
  6: "h6",
} as const;
type Level = keyof typeof LEVEL;

interface HeadingProps extends HeadingDefaultProps, ElementProps {
  level?: Level;
  font?: StandardProperties["font"];
  fontStyle?: StandardProperties["fontStyle"];
  fst?: StandardProperties["fontStyle"];
  fontWeight?: StandardProperties["fontWeight"];
  fw?: StandardProperties["fontWeight"];
  fontSize?: StandardProperties["fontSize"];
  fsz?: StandardProperties["fontSize"];
  fontFamily?: StandardProperties["fontFamily"];
  ff?: StandardProperties["fontFamily"];
  fontVariant?: StandardProperties["fontVariant"];
  fv?: StandardProperties["fontVariant"];
  lineHeight?: StandardProperties["lineHeight"];
  lh?: StandardProperties["lineHeight"];
  textDecoration?: StandardProperties["textDecoration"];
  td?: StandardProperties["textDecoration"];
}

const Heading = forwardRef(
  (props: HeadingProps, forwardedRef: ForwardedRef<HTMLParagraphElement>) => {
    const { level } = props;

    const style: React.CSSProperties = {
      width: props.width ?? props.w,
      height: props.height ?? props.h,
      margin: props.margin ?? props.m,
      padding: props.padding ?? props.p,
      font: props.font,
      fontStyle: props.fontStyle ?? props.fst,
      fontWeight: props.fontWeight ?? props.fw,
      fontSize: props.fontSize ?? props.fsz,
      fontFamily: props.fontFamily ?? props.ff,
      fontVariant: props.fontVariant ?? props.fv,
      lineHeight: props.lineHeight ?? props.lh,
      textDecoration: props.textDecoration ?? props.td,

      ...props.style,
    };

    const Heading = LEVEL[props.level ?? 1];

    return <Heading {...props} ref={forwardedRef} style={style} />;
  }
);

export default Heading;
