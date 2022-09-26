import { DetailedHTMLProps, InputHTMLAttributes, ForwardedRef } from "react";

export type OptionDefaultProps = DetailedHTMLProps<
  InputHTMLAttributes<HTMLOptionElement>,
  HTMLOptionElement
>;
export type OptionsForwardedRef = ForwardedRef<HTMLOptionElement>;
