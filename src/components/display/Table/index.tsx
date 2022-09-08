import { forwardRef } from "react";
import { TableDefaultProps, TableForwardedRef } from "../../../types/props";

interface TableProps extends TableDefaultProps {}

const Table = forwardRef(
  (props: TableProps, forwardedRef: TableForwardedRef) => {
    const style: React.CSSProperties = {
      ...props.style,
    };

    return <table {...props} ref={forwardedRef} style={style} />;
  }
);

export default Table;
