import { DetailedHTMLProps, InputHTMLAttributes, ForwardedRef } from "react";

export type InputDefaultProps = DetailedHTMLProps<
  InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>;
export type InputForwardedRef = ForwardedRef<HTMLInputElement>;

export type InputValueProperty = Pick<
  React.InputHTMLAttributes<HTMLInputElement>,
  "value"
>;
export type InputPlaceholderProperty = Pick<
  React.InputHTMLAttributes<HTMLInputElement>,
  "placeholder"
>;
export type InputOnchangeProperty = Pick<
  React.InputHTMLAttributes<HTMLInputElement>,
  "onChange"
>;
