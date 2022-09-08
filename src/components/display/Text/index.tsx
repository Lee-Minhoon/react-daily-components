import { forwardRef } from "react";
import {
  ElementProps,
  FontProps,
  ParagraphDefaultProps,
  ParagraphForwardedRef,
} from "../../../types/props";
import {
  getSizeProps,
  getWhiteSpaceProps,
  getFontProps,
} from "../../../utilities/props";

interface TextProps extends ParagraphDefaultProps, ElementProps, FontProps {}

const Text = forwardRef(
  (props: TextProps, forwardedRef: ParagraphForwardedRef) => {
    const style: React.CSSProperties = {
      ...getSizeProps(props),
      ...getWhiteSpaceProps(props),
      ...getFontProps(props),
      ...props.style,
    };

    return <p {...props} ref={forwardedRef} style={style} />;
  }
);

export default Text;
