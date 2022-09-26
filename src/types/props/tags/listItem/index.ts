import { DetailedHTMLProps, HTMLAttributes, ForwardedRef } from "react";

export type ListItemDefaultProps = DetailedHTMLProps<
  HTMLAttributes<HTMLLIElement>,
  HTMLLIElement
>;
export type ListItemForwardedRef = ForwardedRef<HTMLLIElement>;
