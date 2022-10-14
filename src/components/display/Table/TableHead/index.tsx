import { forwardRef } from "react";
import {
  TableSectionDefaultProps,
  TableSectionForwardedRef,
} from "../../../../types/props";
import * as Styled from "../style";
import * as StyleProps from "../../../../types/props/style";
import { getStyleProps } from "../../../../utilities/props";

interface TableHeadProps
  extends TableSectionDefaultProps,
    StyleProps.CommonAbbrProps {}

/**
 * Table Head component
 */
const TableHead = forwardRef(
  (
    props: TableHeadProps & StyleProps.AllProperties,
    forwardedRef: TableSectionForwardedRef
  ) => {
    return (
      <Styled.TableHead
        {...props}
        ref={forwardedRef}
        style={getStyleProps(props)}
      />
    );
  }
);

export default TableHead;
