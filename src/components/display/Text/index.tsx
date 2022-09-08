import { forwardRef } from "react";
import {
  ElementProps,
  FontProps,
  ParagraphDefaultProps,
  ParagraphForwardedRef,
} from "../../../types/props";
import { getFontProps, getElementProps } from "../../../utilities/props";

interface TextProps extends ParagraphDefaultProps, ElementProps {}

const Text = forwardRef(
  (props: TextProps & FontProps, forwardedRef: ParagraphForwardedRef) => {
    const style: React.CSSProperties = {
      ...getElementProps(props),
      ...getFontProps(props),
      ...props.style,
    };

    return <p {...props} ref={forwardedRef} style={style} />;
  }
);

export default Text;
