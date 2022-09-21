import { forwardRef } from "react";
import { DivDefaultProps, DivForwardedRef, ElementProps } from "types/props";
import { getElementProps } from "utilities/props";
import * as Styled from "./style";

interface ViewProps extends DivDefaultProps, ElementProps {}

const View = forwardRef((props: ViewProps, forwardedRef: DivForwardedRef) => {
  const style: React.CSSProperties = {
    ...getElementProps(props),
    ...props.style,
  };

  return <Styled.View {...props} ref={forwardedRef} style={style} />;
});

export default View;
