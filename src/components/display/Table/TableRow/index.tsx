import { forwardRef } from "react";
import {
  TableRowDefaultProps,
  TableRowForwardedRef,
} from "../../../../types/props";

interface TableRowProps extends TableRowDefaultProps {}

const TableRow = forwardRef(
  (props: TableRowProps, forwardedRef: TableRowForwardedRef) => {
    const style: React.CSSProperties = {
      ...props.style,
    };

    return <tr {...props} ref={forwardedRef} style={style} />;
  }
);

export default TableRow;
