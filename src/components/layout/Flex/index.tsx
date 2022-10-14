import { forwardRef } from "react";
import { DivDefaultProps, DivForwardedRef } from "../../../types/props";
import { getStyleProps } from "../../../utilities/props";
import * as Styled from "./style";
import * as StyleProps from "../../../types/props/style";

export interface FlexProps
  extends DivDefaultProps,
    StyleProps.CommonAbbrProps,
    StyleProps.FlexGridAbbrProps,
    StyleProps.FlexAbbrProps {}

/**
 * Flex Component
 */
const Flex = forwardRef(
  (
    props: FlexProps & StyleProps.AllProperties,
    forwardedRef: DivForwardedRef
  ) => {
    return (
      <Styled.Flex {...props} ref={forwardedRef} style={getStyleProps(props)} />
    );
  }
);

export default Flex;
