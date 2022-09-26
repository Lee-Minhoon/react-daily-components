import { DetailedHTMLProps, HTMLAttributes, ForwardedRef } from "react";

export type HTMLDefaultProps = DetailedHTMLProps<
  HTMLAttributes<HTMLElement>,
  HTMLElement
>;
export type HTMLForwardedRef = ForwardedRef<HTMLElement>;
