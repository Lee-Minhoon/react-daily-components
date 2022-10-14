import { forwardRef } from "react";
import {
  TableSectionDefaultProps,
  TableSectionForwardedRef,
} from "../../../../types/props";
import * as Styled from "../style";
import * as StyleProps from "../../../../types/props/style";
import { getStyleProps } from "../../../../utilities/props";

interface TableBodyProps
  extends TableSectionDefaultProps,
    StyleProps.CommonAbbrProps {}

/**
 * Table Body Component
 */
const TableBody = forwardRef(
  (
    props: TableBodyProps & StyleProps.AllProperties,
    forwardedRef: TableSectionForwardedRef
  ) => {
    return (
      <Styled.TableBody
        {...props}
        ref={forwardedRef}
        style={getStyleProps(props)}
      />
    );
  }
);

export default TableBody;
