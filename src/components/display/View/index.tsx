import { forwardRef } from "react";
import {
  BorderProps,
  DivDefaultProps,
  DivForwardedRef,
  ElementProps,
} from "../../../types/props";
import {
  getBorderProps,
  getSizeProps,
  getWhiteSpaceProps,
} from "../../../utilities/props";

interface ViewProps extends DivDefaultProps, ElementProps, BorderProps {}

const View = forwardRef((props: ViewProps, forwardedRef: DivForwardedRef) => {
  const style: React.CSSProperties = {
    ...getSizeProps(props),
    ...getWhiteSpaceProps(props),
    ...getBorderProps(props),
    ...props.style,
  };

  return <div {...props} ref={forwardedRef} style={style} />;
});

export default View;
