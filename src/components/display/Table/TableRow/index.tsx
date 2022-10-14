import { forwardRef } from "react";
import {
  TableRowDefaultProps,
  TableRowForwardedRef,
} from "../../../../types/props";
import * as Styled from "../style";
import * as StyleProps from "../../../../types/props/style";
import { getStyleProps } from "../../../../utilities/props";

interface TableRowProps
  extends TableRowDefaultProps,
    StyleProps.CommonAbbrProps {}

/**
 * Table Row Component
 */
const TableRow = forwardRef(
  (
    props: TableRowProps & StyleProps.AllProperties,
    forwardedRef: TableRowForwardedRef
  ) => {
    return (
      <Styled.TableRow
        {...props}
        ref={forwardedRef}
        style={getStyleProps(props)}
      />
    );
  }
);

export default TableRow;
