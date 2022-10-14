import { forwardRef } from "react";
import {
  TableCellDefaultProps,
  TableCellForwardedRef,
} from "../../../../types/props";
import * as Styled from "../style";
import * as StyleProps from "../../../../types/props/style";
import { getStyleProps } from "../../../../utilities/props";

interface TableRowProps
  extends TableCellDefaultProps,
    StyleProps.CommonAbbrProps {}

/**
 * Table Cell Component
 */
const TableCell = forwardRef(
  (
    props: TableRowProps & StyleProps.AllProperties,
    forwardedRef: TableCellForwardedRef
  ) => {
    return (
      <Styled.TableCell
        {...props}
        ref={forwardedRef}
        style={getStyleProps(props)}
      />
    );
  }
);

export default TableCell;
