import { forwardRef } from "react";
import {
  ElementProps,
  FontProps,
  HeadingDefaultProps,
  HeadingForwardedRef,
} from "../../../types/props";
import {
  getFontProps,
  getSizeProps,
  getWhiteSpaceProps,
} from "../../../utilities/props";

const LEVEL = {
  1: "h1",
  2: "h2",
  3: "h3",
  4: "h4",
  5: "h5",
  6: "h6",
} as const;
type Level = keyof typeof LEVEL;

interface HeadingProps extends HeadingDefaultProps, ElementProps, FontProps {
  level: Level;
}

const Heading = forwardRef(
  (props: HeadingProps, forwardedRef: HeadingForwardedRef) => {
    const { level } = props;

    const style: React.CSSProperties = {
      ...getSizeProps(props),
      ...getWhiteSpaceProps(props),
      ...getFontProps(props),
      ...props.style,
    };

    const Heading = LEVEL[level];

    return <Heading {...props} ref={forwardedRef} style={style} />;
  }
);

export default Heading;
