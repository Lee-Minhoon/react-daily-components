import { forwardRef } from "react";
import {
  ListItemDefaultProps,
  ListItemForwardedRef,
} from "../../../../types/props";
import * as Styled from "./style";
import * as StyleProps from "../../../../types/props/style";
import { getStyleProps } from "../../../../utilities/props";

interface ListItemProps
  extends ListItemDefaultProps,
    StyleProps.CommonAbbrProps,
    StyleProps.ListAbbrProps {}

/**
 * List Item Component
 */
const ListItem = forwardRef(
  (
    props: ListItemProps & StyleProps.AllProperties,
    forwardedRef: ListItemForwardedRef
  ) => {
    return (
      <Styled.ListItem
        {...props}
        ref={forwardedRef}
        style={getStyleProps(props)}
      />
    );
  }
);

export default ListItem;
