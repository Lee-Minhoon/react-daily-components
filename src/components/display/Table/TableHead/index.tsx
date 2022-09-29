import { forwardRef } from "react";
import {
  TableSectionDefaultProps,
  TableSectionForwardedRef,
} from "../../../../types/props";
import * as Styled from "../style";

interface TableHeadProps extends TableSectionDefaultProps {}

/**
 * Table Head component
 */
const TableHead = forwardRef(
  (props: TableHeadProps, forwardedRef: TableSectionForwardedRef) => {
    const style: React.CSSProperties = {
      ...props.style,
    };

    return <Styled.TableHead {...props} ref={forwardedRef} style={style} />;
  }
);

export default TableHead;
