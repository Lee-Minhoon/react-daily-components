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
