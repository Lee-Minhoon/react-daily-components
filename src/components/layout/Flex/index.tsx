import { forwardRef } from "react";
import { DivDefaultProps, DivForwardedRef } from "../../../types/props";
import { getStyleProps } from "../../../utilities/props";
import * as Styled from "./style";
import { AllAbbrProps, AllProperties } from "../../../types/props/style";

export interface FlexProps extends DivDefaultProps, AllAbbrProps {}

/**
 * Flex Component
 */
const Flex = forwardRef(
  (props: FlexProps & AllProperties, forwardedRef: DivForwardedRef) => {
    return (
      <Styled.Flex {...props} ref={forwardedRef} style={getStyleProps(props)} />
    );
  }
);

export default Flex;
