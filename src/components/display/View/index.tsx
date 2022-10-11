import { forwardRef } from "react";
import { DivDefaultProps, DivForwardedRef } from "../../../types/props";
import * as Styled from "./style";

interface ViewProps extends DivDefaultProps {}

/**
 * View Component
 */
const View = forwardRef((props: ViewProps, forwardedRef: DivForwardedRef) => {
  const style: React.CSSProperties = {
    ...props.style,
  };

  return <Styled.View {...props} ref={forwardedRef} style={style} />;
});

export default View;
