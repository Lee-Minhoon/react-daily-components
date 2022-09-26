import { DetailedHTMLProps, InputHTMLAttributes, ForwardedRef } from "react";

export type InputDefaultProps = DetailedHTMLProps<
  InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>;
export type InputForwardedRef = ForwardedRef<HTMLInputElement>;

export type InputValueProperty = string | number | readonly string[];
export type InputPlaceholderProperty = string;
export type InputOnchangeProperty = React.ChangeEventHandler<HTMLInputElement>;
