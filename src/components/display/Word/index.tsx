import React, { forwardRef } from "react";
import {
  BorderProps,
  WhiteSpaceProps,
  FontProps,
  SpanDefaultProps,
  SpanForwardedRef,
} from "../../../types/props";
import {
  getWhiteSpaceProps,
  getFontProps,
  getBorderProps,
} from "../../../utilities/props";

interface WordProps
  extends SpanDefaultProps,
    WhiteSpaceProps,
    BorderProps,
    FontProps {}

const Word = forwardRef((props: WordProps, forwardedRef: SpanForwardedRef) => {
  const style: React.CSSProperties = {
    ...getWhiteSpaceProps(props),
    ...getBorderProps(props),
    ...getFontProps(props),
    ...props.style,
  };

  return <span {...props} ref={forwardedRef} style={style} />;
});

export default Word;
