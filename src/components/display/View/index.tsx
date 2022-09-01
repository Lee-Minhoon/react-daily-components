import { ForwardedRef, forwardRef } from "react";
import {
  DivDefaultProps,
  SizePropsT,
  WhiteSpaceProps,
} from "../../../types/props";
import type { StandardProperties } from "csstype";

interface ViewProps extends DivDefaultProps, SizePropsT, WhiteSpaceProps {
  border?: StandardProperties["border"];
  bd?: StandardProperties["border"];
  borderRadius?: StandardProperties["borderRadius"];
  bdr?: StandardProperties["borderRadius"];
  boxShadow?: StandardProperties["boxShadow"];
  bs?: StandardProperties["boxShadow"];
}

const View = forwardRef(
  (props: ViewProps, forwardedRef: ForwardedRef<HTMLDivElement>) => {
    const style: React.CSSProperties = {
      width: props.width ?? props.w,
      height: props.height ?? props.h,
      maxWidth: props.maxWidth ?? props.mw,
      maxHeight: props.maxHeight ?? props.mh,
      margin: props.margin ?? props.m,
      padding: props.padding ?? props.p,
      border: props.border ?? props.bd,
      borderRadius: props.borderRadius ?? props.bdr,
      boxShadow: props.boxShadow ?? props.bs,

      ...props.style,
    };

    return <div {...props} ref={forwardedRef} style={style} />;
  }
);

export default View;
