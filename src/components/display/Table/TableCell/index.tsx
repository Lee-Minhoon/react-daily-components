import { forwardRef } from "react";
import {
  TableCellDefaultProps,
  TableCellForwardedRef,
} from "../../../../types/props";
import * as Styled from "../style";

interface TableRowProps extends TableCellDefaultProps {}

/**
 * Table Cell Component
 */
const TableCell = forwardRef(
  (props: TableRowProps, forwardedRef: TableCellForwardedRef) => {
    const style: React.CSSProperties = {
      ...props.style,
    };

    return <Styled.TableCell {...props} ref={forwardedRef} style={style} />;
  }
);

export default TableCell;
