import { forwardRef } from "react";
import {
  ListItemDefaultProps,
  ListItemForwardedRef,
} from "../../../../types/props";
import * as Styled from "./style";

interface ListItemProps extends ListItemDefaultProps {}

/**
 * List Item Component
 */
const ListItem = forwardRef(
  (props: ListItemProps, forwardedRef: ListItemForwardedRef) => {
    const style: React.CSSProperties = {
      ...props.style,
    };

    return <Styled.ListItem {...props} ref={forwardedRef} style={style} />;
  }
);

export default ListItem;
