import { ForwardedRef, forwardRef } from "react";
import type { StandardProperties } from "csstype";
import {
  OrderedListDefaultProps,
  UnorderedListDefaultProps,
} from "../../../types/props";
import * as Styled from "./style";

type ListTagProps = UnorderedListDefaultProps & OrderedListDefaultProps;
type ListForwardedRef = ForwardedRef<HTMLUListElement & HTMLOListElement>;

interface ListProps extends ListTagProps {
  ordered: boolean;
  listStyle?: StandardProperties["listStyle"];
  ls?: StandardProperties["listStyle"];
  listStyleType?: StandardProperties["listStyleType"];
  lst?: StandardProperties["listStyleType"];
  listStyleImage?: StandardProperties["listStyleImage"];
  lsi?: StandardProperties["listStyleImage"];
  listStylePosition?: StandardProperties["listStylePosition"];
  lsp?: StandardProperties["listStylePosition"];
}

/**
 * List Component
 */
const List = forwardRef((props: ListProps, forwardedRef: ListForwardedRef) => {
  const { ordered } = props;

  const style: React.CSSProperties = {
    listStyle: props.listStyle ?? props.ls,
    listStyleType: props.listStyleType ?? props.lst,
    listStyleImage: props.listStyleImage ?? props.lsi,
    listStylePosition: props.listStylePosition ?? props.lsp,
    ...props.style,
  };

  const Tag = ordered ? Styled.OrderedList : Styled.UnorderedList;

  return <Tag {...props} ref={forwardedRef} style={style} />;
});

export default List;
