import { forwardRef } from "react";
import { DivDefaultProps, DivForwardedRef } from "../../../types/props";
import { getStyleProps } from "../../../utilities/props";
import * as Styled from "./style";
import { AllAbbrProps, AllProperties } from "../../../types/props/style";

export interface GridProps extends DivDefaultProps, AllAbbrProps {}

/**
 * Grid Component
 */
const Grid = forwardRef(
  (props: GridProps & AllProperties, forwardedRef: DivForwardedRef) => {
    return (
      <Styled.Grid {...props} ref={forwardedRef} style={getStyleProps(props)} />
    );
  }
);

export default Grid;
