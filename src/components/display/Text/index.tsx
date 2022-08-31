import { ForwardedRef, forwardRef } from "react";
import {
  ParagraphDefaultProps,
  SizePropsT,
  WhiteSpaceProps,
} from "../../../types/props";
import type { StandardProperties } from "csstype";

interface TextProps extends ParagraphDefaultProps, SizePropsT, WhiteSpaceProps {
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

const Text = forwardRef(
  (props: TextProps, forwardedRef: ForwardedRef<HTMLParagraphElement>) => {
    const style: React.CSSProperties = {
      width: props.width ?? props.w,
      maxWidth: props.maxWidth ?? props.mw,
      height: props.height ?? props.h,
      maxHeight: props.maxHeight ?? props.mh,
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

    return <p {...props} ref={forwardedRef} style={style} />;
  }
);

export default Text;
