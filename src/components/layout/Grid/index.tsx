import { forwardRef } from "react";
import { DivDefaultProps, DivForwardedRef } from "../../../types/props";
import { getStyleProps } from "../../../utilities/props";
import * as Styled from "./style";
import * as StyleProps from "../../../types/props/style";

export interface GridProps
  extends DivDefaultProps,
    StyleProps.CommonAbbrProps,
    StyleProps.FlexGridAbbrProps,
    StyleProps.GridAbbrProps {}

/**
 * Grid Component
 */
const Grid = forwardRef(
  (
    props: GridProps & StyleProps.AllProperties,
    forwardedRef: DivForwardedRef
  ) => {
    return (
      <Styled.Grid {...props} ref={forwardedRef} style={getStyleProps(props)} />
    );
  }
);

export default Grid;
