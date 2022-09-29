import { forwardRef } from "react";
import {
  TableSectionDefaultProps,
  TableSectionForwardedRef,
} from "../../../../types/props";
import * as Styled from "../style";

interface TableBodyProps extends TableSectionDefaultProps {}

/**
 * Table Body Component
 */
const TableBody = forwardRef(
  (props: TableBodyProps, forwardedRef: TableSectionForwardedRef) => {
    const style: React.CSSProperties = {
      ...props.style,
    };

    return <Styled.TableBody {...props} ref={forwardedRef} style={style} />;
  }
);

export default TableBody;
