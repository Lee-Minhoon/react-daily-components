import React, { forwardRef } from "react";
import {
  WhiteSpaceProps,
  FontProps,
  SpanDefaultProps,
  SpanForwardedRef,
} from "../../../types/props";
import { getWhiteSpaceProps, getFontProps } from "../../../utilities/props";

interface WordProps extends SpanDefaultProps, WhiteSpaceProps {}

const Word = forwardRef(
  (props: WordProps & FontProps, forwardedRef: SpanForwardedRef) => {
    const style: React.CSSProperties = {
      ...getWhiteSpaceProps(props),
      ...getFontProps(props),
      ...props.style,
    };

    return <span {...props} ref={forwardedRef} style={style} />;
  }
);

export default Word;
