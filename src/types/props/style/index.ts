import type { Properties } from "csstype";

export interface SizePropsDeprecated {
  width?: number;
  height?: number;
}

export interface ContainerPropsDeprecated extends SizePropsDeprecated {}

/**
 * PropsTypes of All CSS Properties
 */
export type AllProperties = {
  [key in keyof Properties]: Properties[key];
};

/**
 * AllPropTypes
 */
export type AllAbbrProps = {
  [key in keyOf<
    typeof ALL_ABBR_PROPS
  >]?: AllProperties[typeof ALL_ABBR_PROPS[key]];
};

/**
 * Abbreviation PropTypes of HTML flex & grid
 */
export const FLEX_GRID_ABBR_PROPS = {
  fd: "flexDirection",
  ac: "alignContent",
  ai: "alignItems",
  jc: "justifyContent",
  wrap: "flexWrap",

  gac: "gridAutoColumns",
  gar: "gridAutoRows",
  gaf: "gridAutoFlow",
  gtc: "gridTemplateColumns",
  gtr: "gridTemplateRows",
  gta: "gridTemplateAreas",

  rg: "rowGap",
  cg: "columnGap",
  gap: "gap",
} as const;

/**
 * Abbreviation PropTypes of HTML width & height css
 */
export const SIZE_ABBR_PROPS = {
  w: "width",
  minW: "minWidth",
  maxW: "maxWidth",
  h: "height",
  minH: "minHeight",
  maxH: "maxHeight",
} as const;

/**
 * Abbreviation PropTypes of HTML margin & padding css
 */
export const SPACE_ABBR_PROPS = {
  mg: "margin",
  mgt: "marginTop",
  mgr: "marginRight",
  mgb: "marginBottom",
  mgl: "marginLeft",
  pd: "padding",
  pdt: "paddingTop",
  pdr: "paddingRight",
  pdb: "paddingBottom",
  pdl: "paddingLeft",
} as const;

/**
 * Abbreviation PropTypes of HTML background css
 */
export const BACKGROUND_ABBR_PROPS = {
  bg: "background",
  bgc: "backgroundColor",
} as const;

/**
 * Abbreviation PropTypes of HTML font css
 */
export const FONT_ABBR_PROPS = {
  c: "color",
  ft: "font",
  ftst: "fontStyle",
  ftw: "fontWeight",
  fts: "fontSize",
  ftf: "fontFamily",
  ftv: "fontVariant",
  lh: "lineHeight",
  td: "textDecoration",
} as const;

/**
 * Abbreviation PropTypes of HTML border css
 */
export const BORDER_ABBR_PROPS = {
  bd: "border",
  bdr: "borderRadius",
  bxs: "boxShadow",
} as const;

/**
 * Merged All Prop Types
 */
export const ALL_ABBR_PROPS = {
  ...FLEX_GRID_ABBR_PROPS,
  ...SIZE_ABBR_PROPS,
  ...SPACE_ABBR_PROPS,
  ...BACKGROUND_ABBR_PROPS,
  ...FONT_ABBR_PROPS,
  ...BORDER_ABBR_PROPS,
} as const;
