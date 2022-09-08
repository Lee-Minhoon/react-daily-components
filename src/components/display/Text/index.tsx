import { forwardRef } from "react";
import {
  FontProps,
  ParagraphDefaultProps,
  ParagraphForwardedRef,
  WhiteSpaceProps,
} from "../../../types/props";
import { getFontProps, getWhiteSpaceProps } from "../../../utilities/props";

interface TextProps extends ParagraphDefaultProps, WhiteSpaceProps {}

const Text = forwardRef(
  (props: TextProps & FontProps, forwardedRef: ParagraphForwardedRef) => {
    const style: React.CSSProperties = {
      ...getWhiteSpaceProps(props),
      ...getFontProps(props),
      ...props.style,
    };

    return <p {...props} ref={forwardedRef} style={style} />;
  }
);

export default Text;
