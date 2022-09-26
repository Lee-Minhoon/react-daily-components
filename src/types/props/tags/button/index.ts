import { DetailedHTMLProps, ButtonHTMLAttributes, ForwardedRef } from "react";

export type ButtonDefaultProps = DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>;
export type ButtonForwardedRef = ForwardedRef<HTMLButtonElement>;
