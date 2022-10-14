import React, {
  forwardRef,
  ReactElement,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";
import useClickOutside from "../../../hooks/useClickOutside";
import {
  InputOnchangeProperty,
  InputPlaceholderProperty,
  InputValueProperty,
} from "../../../types/props";
import ArrowButton from "../../../components/common/ArrowButton";
import useActive from "../../../hooks/useActive";
import _ from "lodash";
import * as Styled from "./style";
import * as StyleProps from "../../../types/props/style";
import { OptionProps } from "./Option";
import {
  InputChangeEvent,
  InputFocusEvent,
  InputForwardedRef,
  InputKeyboardEvent,
  InputOnFoucsProperty,
} from "../../../types/props/tags/input";
import { dispatchChange } from "../../../utilities/event";
import useSetScrollPosition from "../../../hooks/useSetScrollPosition";
import { getStyleProps } from "../../../utilities/props";

type Children = ReactElement<OptionProps>;

interface SelectListProps extends StyleProps.CommonAbbrProps {
  searchable?: boolean;
  showItemCount?: number;
  children?: Children | Array<Children>;
  value: InputValueProperty;
  placeholder?: InputPlaceholderProperty;
  onChange: InputOnchangeProperty;
  onFocus?: InputOnFoucsProperty;
  onSearch?: InputOnchangeProperty;
  style?: React.CSSProperties;
  listStyle?: React.CSSProperties;
  itemStyle?: React.CSSProperties;
}

const Select = forwardRef(
  (
    props: SelectListProps & StyleProps.AllProperties,
    forwardedRef: InputForwardedRef
  ) => {
    const {
      searchable = false,
      showItemCount = 8,
      children,
      value,
      placeholder,
      onChange,
      onFocus = () => {},
      onSearch = () => {},
      listStyle,
      itemStyle,
    } = props;
    const childrens = _.isArray(children) ? children : [children];
    const { active, setActive, handleActive } = useActive();
    const [search, setSearch] = useState<string>("");
    const [result, setResult] = useState<Array<any>>(childrens);
    const containerRef = useRef<HTMLDivElement>(null);
    const listRef = useRef<HTMLUListElement>(null);
    const itemRef = useRef<HTMLLIElement>(null);

    const itemIndex = result.findIndex((item) => item.props.value === value);
    const itemHeight = itemRef.current?.clientHeight ?? 0;

    useClickOutside(containerRef, setActive);
    useSetScrollPosition(listRef, itemIndex * itemHeight, active);
    useEffect(() => {
      if (active) {
        setResult(childrens);
      }
    }, [active]);

    const handleKeyDown = useCallback(
      (e: InputKeyboardEvent) => {
        switch (e.nativeEvent.key) {
          case "Enter":
            const find = childrens.find(
              (item) => item?.props.children === search
            );
            find && handleDispatchChange(find.props);
            break;
          case "Escape":
            setActive(false);
            break;
          default:
            const filter = childrens.filter((item) =>
              item?.props.children.includes(search)
            );
            setResult(filter);
            setActive(true);
        }
      },
      [search]
    );

    const handleSearch = useCallback((e: InputChangeEvent) => {
      setSearch(e.target.value);
      onSearch(e);
    }, []);

    const handleFocus = useCallback((e: InputFocusEvent) => {
      setActive(true);
      onFocus(e);
    }, []);

    const handleDispatchChange = useCallback((props: OptionProps) => {
      dispatchChange(containerRef, props.value);
      setSearch(props.children);
      setActive(false);
    }, []);

    return (
      <Styled.Container
        ref={containerRef}
        active={active}
        style={getStyleProps(props)}
      >
        <input
          ref={forwardedRef}
          value={value}
          onChange={onChange}
          readOnly
          hidden
        />
        <Styled.Input
          value={searchable ? search : value}
          placeholder={placeholder}
          onChange={handleSearch}
          onFocus={handleFocus}
          onKeyUp={(e) => handleKeyDown(e)}
          readOnly={searchable ? false : true}
        />
        <ArrowButton
          onClick={handleActive}
          direction={active ? "Up" : "Down"}
        />
        <Styled.List
          ref={listRef}
          active={active}
          itemHeight={itemStyle?.height ?? "35px"}
          showItemCount={Math.min(childrens.length, showItemCount)}
          style={listStyle}
        >
          {result.map((item) => (
            <Styled.Item
              key={item.props.value}
              ref={itemRef}
              active={item.props.value === value}
              onClick={() => handleDispatchChange(item.props)}
              style={itemStyle}
            >
              {item.props.children}
            </Styled.Item>
          ))}
        </Styled.List>
      </Styled.Container>
    );
  }
);

export default Select;
