import { forwardRef } from "react";
import { TableDefaultProps, TableForwardedRef } from "types/props";
import * as Styled from "./style";

interface TableProps extends TableDefaultProps {}

const Table = forwardRef(
  (props: TableProps, forwardedRef: TableForwardedRef) => {
    const style: React.CSSProperties = {
      ...props.style,
    };

    return <Styled.Table {...props} ref={forwardedRef} style={style} />;
  }
);

export default Table;
