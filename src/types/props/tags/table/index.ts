import { DetailedHTMLProps, HTMLAttributes, ForwardedRef } from "react";

export type TableDefaultProps = DetailedHTMLProps<
  HTMLAttributes<HTMLTableElement>,
  HTMLTableElement
>;
export type TableForwardedRef = ForwardedRef<HTMLTableElement>;

export type TableSectionDefaultProps = DetailedHTMLProps<
  HTMLAttributes<HTMLTableSectionElement>,
  HTMLTableSectionElement
>;
export type TableSectionForwardedRef = ForwardedRef<HTMLTableSectionElement>;

export type TableRowDefaultProps = DetailedHTMLProps<
  HTMLAttributes<HTMLTableRowElement>,
  HTMLTableRowElement
>;
export type TableRowForwardedRef = ForwardedRef<HTMLTableRowElement>;

export type TableCellDefaultProps = DetailedHTMLProps<
  HTMLAttributes<HTMLTableCellElement>,
  HTMLTableCellElement
>;
export type TableCellForwardedRef = ForwardedRef<HTMLTableCellElement>;
