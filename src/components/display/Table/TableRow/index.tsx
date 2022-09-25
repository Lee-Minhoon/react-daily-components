import { forwardRef } from "react";
import { TableRowDefaultProps, TableRowForwardedRef } from "types/props";
import * as Styled from "../style";

interface TableRowProps extends TableRowDefaultProps {}

/**
 * Table Row Component
 */
const TableRow = forwardRef(
  (props: TableRowProps, forwardedRef: TableRowForwardedRef) => {
    const style: React.CSSProperties = {
      ...props.style,
    };

    return <Styled.TableRow {...props} ref={forwardedRef} style={style} />;
  }
);

export default TableRow;
