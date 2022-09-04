import React, { ForwardedRef, forwardRef } from "react";
import { ElementProps, SpanDefaultProps } from "../../../types/props";
import type { StandardProperties } from "csstype";

interface WordProps extends SpanDefaultProps, ElementProps {
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

const Word = forwardRef(
  (props: WordProps, forwardedRef: ForwardedRef<HTMLParagraphElement>) => {
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

    return <span {...props} ref={forwardedRef} style={style} />;
  }
);

export default Word;
