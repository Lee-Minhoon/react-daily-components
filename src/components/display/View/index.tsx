import { forwardRef } from "react";
import {
  BorderProps,
  DivDefaultProps,
  DivForwardedRef,
  ElementProps,
} from "../../../types/props";
import { getElementProps } from "../../../utilities/props";

interface ViewProps extends DivDefaultProps, ElementProps {}

const View = forwardRef((props: ViewProps, forwardedRef: DivForwardedRef) => {
  const style: React.CSSProperties = {
    ...getElementProps(props),
    ...props.style,
  };

  return <div {...props} ref={forwardedRef} style={style} />;
});

export default View;
