import { forwardRef } from "react";
import { TableDefaultProps, TableForwardedRef } from "../../../types/props";
import * as Styled from "./style";
import * as StyleProps from "../../../types/props/style";
import { getStyleProps } from "../../../utilities/props";

interface TableProps extends TableDefaultProps, StyleProps.CommonAbbrProps {}

/**
 * Table Component
 */
const Table = forwardRef(
  (
    props: TableProps & StyleProps.AllLonghandProperties,
    forwardedRef: TableForwardedRef
  ) => {
    return (
      <Styled.Table
        {...props}
        ref={forwardedRef}
        style={getStyleProps(props)}
      />
    );
  }
);

export default Table;
