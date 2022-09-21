import { ForwardedRef, forwardRef } from "react";
import {
  ParagraphDefaultProps,
  QuoteDefaultProps,
  SpanDefaultProps,
  WhiteSpaceProps,
} from "types/props";
import { getFontProps, getWhiteSpaceProps } from "utilities/props";
import * as Styled from "./style";

const TAGS = {
  p: Styled.P,
  span: Styled.Span,
  strong: Styled.Strong,
  b: Styled.B,
  em: Styled.Em,
  i: Styled.I,
  q: Styled.Q,
  mark: Styled.Mark,
} as const;
type Tags = keyof typeof TAGS;

type TextTagProps = ParagraphDefaultProps &
  SpanDefaultProps &
  QuoteDefaultProps;
type TextTagForwardedRef = ForwardedRef<
  HTMLParagraphElement & HTMLSpanElement & HTMLQuoteElement
>;

interface TextProps extends TextTagProps, WhiteSpaceProps {
  tag: Tags;
}

const Text = forwardRef(
  (props: TextProps, forwardedRef: TextTagForwardedRef) => {
    const { tag } = props;

    const style: React.CSSProperties = {
      ...getWhiteSpaceProps(props),
      ...getFontProps(props),
      ...props.style,
    };

    const Tag = TAGS[tag];

    return <Tag {...props} ref={forwardedRef} style={style} />;
  }
);

export default Text;
