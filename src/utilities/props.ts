import React from "react";
import {
  AllProperties,
  AllAbbrProps,
  ALL_ABBR_PROPS,
} from "../types/props/style";

interface GetStyleProps extends AllProperties, AllAbbrProps {
  style?: React.CSSProperties;
}

export const getStyleProps = (props: GetStyleProps): React.CSSProperties => {
  const abbrProps: any = {};
  Object.entries(ALL_ABBR_PROPS).map(([k, v]) => {
    abbrProps[v] = props[v] ?? props[k as keyOf<typeof ALL_ABBR_PROPS>];
  });
  return { ...abbrProps, ...props, ...props.style };
};
