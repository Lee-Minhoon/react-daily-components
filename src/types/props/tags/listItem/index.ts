import { DetailedHTMLProps, HTMLAttributes, ForwardedRef } from "react";

export type ListItemDefaultProps = DetailedHTMLProps<
  HTMLAttributes<HTMLLIElement>,
  HTMLLIElement
>;
export type ListItemForwardedRef = ForwardedRef<HTMLLIElement>;

export type ListItemOnClickProperty = React.MouseEventHandler<HTMLLIElement>;

export type ListItemMouseEvent = React.MouseEvent<HTMLLIElement, MouseEvent>;
