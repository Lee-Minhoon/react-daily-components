import { forwardRef } from "react";
import {
  TableSectionDefaultProps,
  TableSectionForwardedRef,
} from "../../../../types/props";

interface TableHeadProps extends TableSectionDefaultProps {}

const TableHead = forwardRef(
  (props: TableHeadProps, forwardedRef: TableSectionForwardedRef) => {
    const style: React.CSSProperties = {
      ...props.style,
    };

    return <thead {...props} ref={forwardedRef} style={style} />;
  }
);

export default TableHead;
