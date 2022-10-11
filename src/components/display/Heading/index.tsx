import { forwardRef } from "react";
import {
  HeadingDefaultProps,
  HeadingForwardedRef,
  AllAbbrProps,
  AllProperties,
} from "../../../types/props";
import { getStyleProps } from "../../../utilities/props";
import * as Styled from "./style";

const LEVEL = {
  1: Styled.H1,
  2: Styled.H2,
  3: Styled.H3,
  4: Styled.H4,
  5: Styled.H5,
  6: Styled.H6,
} as const;
type Level = keyof typeof LEVEL;

interface HeadingProps extends HeadingDefaultProps, AllAbbrProps {
  level?: Level;
}

/**
 * Heading Component
 */
const Heading = forwardRef(
  (props: HeadingProps & AllProperties, forwardedRef: HeadingForwardedRef) => {
    const { level = 1 } = props;

    const Heading = LEVEL[level];

    return (
      <Heading {...props} ref={forwardedRef} style={getStyleProps(props)} />
    );
  }
);

export default Heading;
