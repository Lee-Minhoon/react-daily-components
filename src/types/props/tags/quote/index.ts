import { DetailedHTMLProps, ButtonHTMLAttributes, ForwardedRef } from "react";

export type QuoteDefaultProps = DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLQuoteElement>,
  HTMLQuoteElement
>;
export type QuoteForwardedRef = ForwardedRef<HTMLQuoteElement>;
