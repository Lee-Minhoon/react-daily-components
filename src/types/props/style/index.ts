import type { Properties, StandardLonghandProperties } from "csstype";

export interface SizePropsDeprecated {
  width?: number;
  height?: number;
}

export interface ContainerPropsDeprecated extends SizePropsDeprecated {}

/**
 * PropTypes of All CSS Properties
 */
export type AllProperties = { [key in keyOf<Properties>]?: Properties[key] };

/**
 * PropTypes of All CSS Properties
 */
export type AllLonghandProperties = {
  [key in keyOf<StandardLonghandProperties>]?: StandardLonghandProperties[key];
};

// /**
//  * Generic Type of Abbreviation PropTypes
//  */
// export type AbbrProperties<T> = {
//   [key in keyOf<T>]?: AllProperties[T[key]];
// };

/**
 * Abbreviation Style Property Types of Layout
 */
export const LAYOUT_ABBR_PROPS = {
  d: "display",
  of: "overflow",
  ps: "position",
  v: "visibility",
  z: "zIndex",
} as const;
export type LayoutAbbrProps = {
  [key in keyOf<
    typeof LAYOUT_ABBR_PROPS
  >]?: AllProperties[typeof ALL_ABBR_PROPS[key]];
};

/**
 * Abbreviation Style Property Types of Flex & Grid
 */
export const FLEX_GRID_ABBR_PROPS = {
  rg: "rowGap",
  cg: "columnGap",
} as const;
export type FlexGridAbbrProps = {
  [key in keyOf<
    typeof FLEX_GRID_ABBR_PROPS
  >]?: AllProperties[typeof ALL_ABBR_PROPS[key]];
};

/**
 * Abbreviation Style Property Types of Flex
 */
export const FLEX_ABBR_PROPS = {
  fd: "flexDirection",
  ac: "alignContent",
  ai: "alignItems",
  jc: "justifyContent",
  fw: "flexWrap",
} as const;
export type FlexAbbrProps = {
  [key in keyOf<
    typeof FLEX_ABBR_PROPS
  >]?: AllProperties[typeof ALL_ABBR_PROPS[key]];
};

/**
 * Abbreviation Style Property Types of Grid
 */
export const GRID_ABBR_PROPS = {
  gac: "gridAutoColumns",
  gar: "gridAutoRows",
  gaf: "gridAutoFlow",
  gtc: "gridTemplateColumns",
  gtr: "gridTemplateRows",
  gta: "gridTemplateAreas",
} as const;
export type GridAbbrProps = {
  [key in keyOf<
    typeof GRID_ABBR_PROPS
  >]?: AllProperties[typeof ALL_ABBR_PROPS[key]];
};

/**
 * Abbreviation Style Property Types of Spacing
 */
export const SPACING_ABBR_PROPS = {
  m: "margin",
  mt: "marginTop",
  mr: "marginRight",
  mb: "marginBottom",
  ml: "marginLeft",
  p: "padding",
  pt: "paddingTop",
  pr: "paddingRight",
  pb: "paddingBottom",
  pl: "paddingLeft",
} as const;
export type SpacingAbbrProps = {
  [key in keyOf<
    typeof SPACING_ABBR_PROPS
  >]?: AllProperties[typeof ALL_ABBR_PROPS[key]];
};

/**
 * Abbreviation Style Property Types of Sizing
 */
export const SIZING_ABBR_PROPS = {
  w: "width",
  minW: "minWidth",
  maxW: "maxWidth",
  h: "height",
  minH: "minHeight",
  maxH: "maxHeight",
} as const;
export type SizingAbbrProps = {
  [key in keyOf<
    typeof SIZING_ABBR_PROPS
  >]?: AllProperties[typeof ALL_ABBR_PROPS[key]];
};

/**
 * Abbreviation Style Property Types of Font
 */
export const FONT_ABBR_PROPS = {
  c: "color",
  f: "font",
  fst: "fontStyle",
  fw: "fontWeight",
  fs: "fontSize",
  ff: "fontFamily",
  fv: "fontVariant",
  lh: "lineHeight",
  ta: "textAlign",
  tof: "textOverflow",
  td: "textDecoration",
  ws: "whiteSpace",
} as const;
export type FontAbbrProps = {
  [key in keyOf<
    typeof FONT_ABBR_PROPS
  >]?: AllProperties[typeof ALL_ABBR_PROPS[key]];
};

/**
 * Abbreviation Style Property Types of List
 */
export const LIST_ABBR_PROPS = {
  ls: "listStyle",
  lst: "listStyleType",
  lsp: "listStylePosition",
} as const;
export type ListAbbrProps = {
  [key in keyOf<
    typeof LIST_ABBR_PROPS
  >]?: AllProperties[typeof ALL_ABBR_PROPS[key]];
};

/**
 * Abbreviation Style Property Types of Background
 */
export const BACKGROUND_ABBR_PROPS = {
  bg: "background",
  bgc: "backgroundColor",
} as const;
export type BackgroundAbbrProps = {
  [key in keyOf<
    typeof BACKGROUND_ABBR_PROPS
  >]?: AllProperties[typeof ALL_ABBR_PROPS[key]];
};

/**
 * Abbreviation Style Property Types of Border
 */
export const BORDER_ABBR_PROPS = {
  b: "border",
  o: "outline",
  br: "borderRadius",
} as const;
export type BorderAbbrProps = {
  [key in keyOf<
    typeof BORDER_ABBR_PROPS
  >]?: AllProperties[typeof ALL_ABBR_PROPS[key]];
};

/**
 * Abbreviation Style Property Types of Effects
 */
export const EFFECT_ABBR_PROPS = {
  bs: "boxShadow",
} as const;
export type EffectAbbrProps = {
  [key in keyOf<
    typeof EFFECT_ABBR_PROPS
  >]?: AllProperties[typeof ALL_ABBR_PROPS[key]];
};

/**
 * Common Abbreviation Style Property Types
 */
export const COMMON_ABBR_PROPS = {
  ...LAYOUT_ABBR_PROPS,
  ...SPACING_ABBR_PROPS,
  ...SIZING_ABBR_PROPS,
  ...FONT_ABBR_PROPS,
  ...BACKGROUND_ABBR_PROPS,
  ...BORDER_ABBR_PROPS,
  ...EFFECT_ABBR_PROPS,
} as const;
export type CommonAbbrProps = {
  [key in keyOf<
    typeof COMMON_ABBR_PROPS
  >]?: AllProperties[typeof ALL_ABBR_PROPS[key]];
};

/**
 * All Abbreviation Style Property Types
 */
export const ALL_ABBR_PROPS = {
  ...LAYOUT_ABBR_PROPS,
  ...FLEX_GRID_ABBR_PROPS,
  ...FLEX_ABBR_PROPS,
  ...GRID_ABBR_PROPS,
  ...SPACING_ABBR_PROPS,
  ...SIZING_ABBR_PROPS,
  ...FONT_ABBR_PROPS,
  ...LIST_ABBR_PROPS,
  ...BACKGROUND_ABBR_PROPS,
  ...BORDER_ABBR_PROPS,
  ...EFFECT_ABBR_PROPS,
} as const;
export type AllAbbrProps = {
  [key in keyOf<
    typeof ALL_ABBR_PROPS
  >]?: AllProperties[typeof ALL_ABBR_PROPS[key]];
};
