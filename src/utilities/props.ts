import React from "react";
import { keyOf } from "../types/common";
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
    if (props[v] || props[k as keyOf<typeof ALL_ABBR_PROPS>]) {
      abbrProps[v] = props[v] ?? props[k as keyOf<typeof ALL_ABBR_PROPS>];
    }
  });
  return { ...abbrProps, ...props, ...props.style };
};
