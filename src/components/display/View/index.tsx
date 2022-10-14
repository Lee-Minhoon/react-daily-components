import { forwardRef } from "react";
import { DivDefaultProps, DivForwardedRef } from "../../../types/props";
import * as Styled from "./style";
import * as StyleProps from "../../../types/props/style";
import { getStyleProps } from "../../../utilities/props";

interface ViewProps extends DivDefaultProps, StyleProps.CommonAbbrProps {}

/**
 * View Component
 */
const View = forwardRef(
  (
    props: ViewProps & StyleProps.AllProperties,
    forwardedRef: DivForwardedRef
  ) => {
    return (
      <Styled.View {...props} ref={forwardedRef} style={getStyleProps(props)} />
    );
  }
);

export default View;
