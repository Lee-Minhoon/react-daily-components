import React, {
  DetailedHTMLProps,
  InputHTMLAttributes,
  ForwardedRef,
} from "react";

export type InputDefaultProps = DetailedHTMLProps<
  InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>;
export type InputForwardedRef = ForwardedRef<HTMLInputElement>;

export type InputValueProperty = string | number | readonly string[];
export type InputPlaceholderProperty = string;
export type InputOnChangeProperty = React.ChangeEventHandler<HTMLInputElement>;
export type InputOnFoucsProperty = React.FocusEventHandler<HTMLInputElement>;

export type InputChangeEvent = React.ChangeEvent<HTMLInputElement>;
export type InputFocusEvent = React.FocusEvent<HTMLInputElement>;
export type InputKeyboardEvent = React.KeyboardEvent<HTMLInputElement>;
