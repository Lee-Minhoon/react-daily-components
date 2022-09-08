import { forwardRef } from "react";
import {
  TableCellDefaultProps,
  TableCellForwardedRef,
} from "../../../../types/props";

interface TableRowProps extends TableCellDefaultProps {}

const TableCell = forwardRef(
  (props: TableRowProps, forwardedRef: TableCellForwardedRef) => {
    const style: React.CSSProperties = {
      ...props.style,
    };

    return <td {...props} ref={forwardedRef} style={style} />;
  }
);

export default TableCell;
