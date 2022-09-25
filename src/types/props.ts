import {
  DetailedHTMLProps,
  ButtonHTMLAttributes,
  InputHTMLAttributes,
  HTMLAttributes,
  ForwardedRef,
} from "react";
import type { StandardProperties } from "csstype";

export interface SizePropsDeprecated {
  width?: number;
  height?: number;
}

export interface ContainerPropsDeprecated extends SizePropsDeprecated {}

/**
 * PropTypes of Container
 */
export type ContainerProps = SizeProps &
  MaxSizeProps &
  WhiteSpaceProps &
  BackgroundProps &
  BorderProps;

/**
 * PropTypes of Element
 */
export type ElementProps = SizeProps &
  WhiteSpaceProps &
  BackgroundProps &
  BorderProps;

/**
 * PropTypes of HTML width & height css
 */
export interface SizeProps {
  width?: StandardProperties["width"];
  w?: StandardProperties["width"];
  height?: StandardProperties["height"];
  h?: StandardProperties["height"];
}

/**
 * PropTypes of HTML max_width & max_height css
 */
export interface MaxSizeProps {
  maxWidth?: StandardProperties["maxWidth"];
  mw?: StandardProperties["maxWidth"];
  maxHeight?: StandardProperties["maxHeight"];
  mh?: StandardProperties["maxHeight"];
}

/**
 * PropTypes of HTML margin & padding css
 */
export interface WhiteSpaceProps {
  margin?: StandardProperties["margin"];
  m?: StandardProperties["margin"];
  padding?: StandardProperties["padding"];
  p?: StandardProperties["padding"];
}

/**
 * PropTypes of HTML background css
 */
export interface BackgroundProps {
  background?: StandardProperties["background"];
  bg?: StandardProperties["background"];
  backgroundColor?: StandardProperties["backgroundColor"];
  bgc?: StandardProperties["backgroundColor"];
}

/**
 * PropTypes of HTML font css
 */
export interface FontProps {
  color?: StandardProperties["color"];
  c?: StandardProperties["color"];
  font?: StandardProperties["font"];
  fontStyle?: StandardProperties["fontStyle"];
  fst?: StandardProperties["fontStyle"];
  fontWeight?: StandardProperties["fontWeight"];
  fw?: StandardProperties["fontWeight"];
  fontSize?: StandardProperties["fontSize"];
  fsz?: StandardProperties["fontSize"];
  fontFamily?: StandardProperties["fontFamily"];
  ff?: StandardProperties["fontFamily"];
  fontVariant?: StandardProperties["fontVariant"];
  fv?: StandardProperties["fontVariant"];
  lineHeight?: StandardProperties["lineHeight"];
  lh?: StandardProperties["lineHeight"];
  textDecoration?: StandardProperties["textDecoration"];
  td?: StandardProperties["textDecoration"];
}

/**
 * PropTypes of HTML border css
 */
export interface BorderProps {
  border?: StandardProperties["border"];
  bd?: StandardProperties["border"];
  borderRadius?: StandardProperties["borderRadius"];
  bdr?: StandardProperties["borderRadius"];
  boxShadow?: StandardProperties["boxShadow"];
  bs?: StandardProperties["boxShadow"];
}

/**
 * Types of HTML tag
 */
export type HTMLDefaultProps = DetailedHTMLProps<
  HTMLAttributes<HTMLElement>,
  HTMLElement
>;
export type HTMLForwardedRef = ForwardedRef<HTMLElement>;

/**
 * Types of HTML div tag
 */
export type DivDefaultProps = DetailedHTMLProps<
  HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
>;
export type DivForwardedRef = ForwardedRef<HTMLDivElement>;

/**
 * Types of HTML ul tag
 */
export type UnorderedListDefaultProps = DetailedHTMLProps<
  HTMLAttributes<HTMLUListElement>,
  HTMLUListElement
>;
export type UnorderedListForwardedRef = ForwardedRef<HTMLUListElement>;

/**
 * Types of HTML ol tag
 */
export type OrderedListDefaultProps = DetailedHTMLProps<
  HTMLAttributes<HTMLOListElement>,
  HTMLOListElement
>;
export type OrderedListForwardedRef = ForwardedRef<HTMLOListElement>;

/**
 * Types of HTML li list tag
 */
export type ListItemDefaultProps = DetailedHTMLProps<
  HTMLAttributes<HTMLLIElement>,
  HTMLLIElement
>;
export type ListItemForwardedRef = ForwardedRef<HTMLLIElement>;

/**
 * Types of HTML table tag
 */
export type TableDefaultProps = DetailedHTMLProps<
  HTMLAttributes<HTMLTableElement>,
  HTMLTableElement
>;
export type TableForwardedRef = ForwardedRef<HTMLTableElement>;

/**
 * Types of HTML thead, tbody tag
 */
export type TableSectionDefaultProps = DetailedHTMLProps<
  HTMLAttributes<HTMLTableSectionElement>,
  HTMLTableSectionElement
>;
export type TableSectionForwardedRef = ForwardedRef<HTMLTableSectionElement>;

/**
 * Types of HTML tr tag
 */
export type TableRowDefaultProps = DetailedHTMLProps<
  HTMLAttributes<HTMLTableRowElement>,
  HTMLTableRowElement
>;
export type TableRowForwardedRef = ForwardedRef<HTMLTableRowElement>;

/**
 * Types of HTML td tag
 */
export type TableCellDefaultProps = DetailedHTMLProps<
  HTMLAttributes<HTMLTableCellElement>,
  HTMLTableCellElement
>;
export type TableCellForwardedRef = ForwardedRef<HTMLTableCellElement>;

/**
 * Types of HTML h1 ~ h6 tag
 */
export type HeadingDefaultProps = DetailedHTMLProps<
  HTMLAttributes<HTMLHeadingElement>,
  HTMLHeadingElement
>;
export type HeadingForwardedRef = ForwardedRef<HTMLHeadingElement>;

/**
 * Types of HTML p tag
 */
export type ParagraphDefaultProps = DetailedHTMLProps<
  HTMLAttributes<HTMLParagraphElement>,
  HTMLParagraphElement
>;
export type ParagraphForwardedRef = ForwardedRef<HTMLParagraphElement>;

/**
 * Types of HTML span tag
 */
export type SpanDefaultProps = DetailedHTMLProps<
  HTMLAttributes<HTMLSpanElement>,
  HTMLSpanElement
>;
export type SpanForwardedRef = ForwardedRef<HTMLSpanElement>;

/**
 * Types of HTML Quote tag
 */
export type QuoteDefaultProps = DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLQuoteElement>,
  HTMLQuoteElement
>;
export type QuoteForwardedRef = ForwardedRef<HTMLQuoteElement>;

/**
 * Types of HTML button tag
 */
export type ButtonDefaultProps = DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>;
export type ButtonForwardedRef = ForwardedRef<HTMLButtonElement>;

/**
 * Types of HTML input tag
 */
export type InputDefaultProps = DetailedHTMLProps<
  InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>;
export type InputForwardedRef = ForwardedRef<HTMLInputElement>;
