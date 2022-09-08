import { forwardRef } from "react";
import {
  FontProps,
  HeadingDefaultProps,
  HeadingForwardedRef,
  WhiteSpaceProps,
} from "../../../types/props";
import { getFontProps, getWhiteSpaceProps } from "../../../utilities/props";

const LEVEL = {
  1: "h1",
  2: "h2",
  3: "h3",
  4: "h4",
  5: "h5",
  6: "h6",
} as const;
type Level = keyof typeof LEVEL;

interface HeadingProps extends HeadingDefaultProps, WhiteSpaceProps {
  level: Level;
}

const Heading = forwardRef(
  (props: HeadingProps & FontProps, forwardedRef: HeadingForwardedRef) => {
    const { level } = props;

    const style: React.CSSProperties = {
      ...getWhiteSpaceProps(props),
      ...getFontProps(props),
      ...props.style,
    };

    const Heading = LEVEL[level];

    return <Heading {...props} ref={forwardedRef} style={style} />;
  }
);

export default Heading;
