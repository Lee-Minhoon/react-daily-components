import { ForwardedRef, forwardRef } from "react";
import {
  ParagraphDefaultProps,
  QuoteDefaultProps,
  SpanDefaultProps,
} from "../../../types/props";
import * as Styled from "./style";

const TAGS = {
  p: Styled.Paragraph,
  span: Styled.Span,
  strong: Styled.Strong,
  b: Styled.Bold,
  em: Styled.Emphasis,
  i: Styled.Italic,
  q: Styled.Quote,
  mark: Styled.Mark,
} as const;
type Tags = keyof typeof TAGS;

type TextTagProps = ParagraphDefaultProps &
  SpanDefaultProps &
  QuoteDefaultProps;
type TextTagForwardedRef = ForwardedRef<
  HTMLParagraphElement & HTMLSpanElement & HTMLQuoteElement
>;

interface TextProps extends TextTagProps {
  tag?: Tags;
}

/**
 * Text Component
 */
const Text = forwardRef(
  (props: TextProps, forwardedRef: TextTagForwardedRef) => {
    const { tag = "span" } = props;

    const style: React.CSSProperties = {
      ...props.style,
    };

    const Tag = TAGS[tag];

    return <Tag {...props} ref={forwardedRef} style={style} />;
  }
);

export default Text;
