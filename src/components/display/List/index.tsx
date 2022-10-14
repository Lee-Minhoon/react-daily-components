import { ForwardedRef, forwardRef } from "react";
import {
  OrderedListDefaultProps,
  UnorderedListDefaultProps,
} from "../../../types/props";
import * as Styled from "./style";
import * as StyleProps from "../../../types/props/style";
import { getStyleProps } from "../../../utilities/props";

type ListTagProps = UnorderedListDefaultProps & OrderedListDefaultProps;
type ListForwardedRef = ForwardedRef<HTMLUListElement & HTMLOListElement>;

interface ListProps
  extends ListTagProps,
    StyleProps.CommonAbbrProps,
    StyleProps.ListAbbrProps {
  ordered: boolean;
}

/**
 * List Component
 */
const List = forwardRef(
  (
    props: ListProps & StyleProps.AllProperties,
    forwardedRef: ListForwardedRef
  ) => {
    const { ordered } = props;

    const Tag = ordered ? Styled.OrderedList : Styled.UnorderedList;

    return <Tag {...props} ref={forwardedRef} style={getStyleProps(props)} />;
  }
);

export default List;
