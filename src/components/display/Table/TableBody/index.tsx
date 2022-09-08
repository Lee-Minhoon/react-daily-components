import { forwardRef } from "react";
import {
  TableSectionDefaultProps,
  TableSectionForwardedRef,
} from "../../../../types/props";

interface TableBodyProps extends TableSectionDefaultProps {}

const TableBody = forwardRef(
  (props: TableBodyProps, forwardedRef: TableSectionForwardedRef) => {
    const style: React.CSSProperties = {
      ...props.style,
    };

    return <tbody {...props} ref={forwardedRef} style={style} />;
  }
);

export default TableBody;
