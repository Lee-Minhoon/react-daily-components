import React, { ReactElement, useCallback, useRef, useState } from "react";
import useClickOutside from "hooks/useClickOutside";
import {
  InputDefaultProps,
  InputOnchangeProperty,
  InputPlaceholderProperty,
  InputValueProperty,
  SizeProps,
} from "types/props";
import ArrowButton from "components/common/ArrowButton";
import useSetScrollPosition from "hooks/useSetScrollPosition";
import { getSizeProps } from "utilities/props";
import useActive from "hooks/useActive";
import _ from "lodash";
import * as Styled from "./style";
import { OptionProps } from "./Option";

type Children = ReactElement<OptionProps>;

interface SelectListProps extends SizeProps {
  children?: Children | Array<Children>;
  value: InputValueProperty;
  placeholder: InputPlaceholderProperty;
  onChange: InputOnchangeProperty;
  isSearchable?: boolean;
  showItemCount?: number;
  style?: React.CSSProperties;
  listStyle?: React.CSSProperties;
  itemStyle?: React.CSSProperties;
}

const Select = (props: SelectListProps) => {
  const {
    children,
    value,
    placeholder,
    onChange,
    isSearchable = false,
    showItemCount = 8,
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

  useClickOutside(containerRef, setActive);
  useSetScrollPosition(
    listRef,
    result.findIndex((item) => item === value) *
      (itemRef.current?.clientHeight ?? 0),
    active
  );

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent<HTMLInputElement>) => {
      switch (e.nativeEvent.key) {
        case "Enter":
          const find = childrens.find((item) => item?.props.value === search);
          find && dispatchInput(find.props.value + "");
          break;
        case "Escape":
          setActive(false);
          break;
        default:
          const filter = childrens.filter((item) =>
            (item?.props.value + "").includes(search)
          );
          setResult(filter);
          setActive(true);
      }
    },
    [search]
  );

  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(e);
    setSearch(e.target.value);
  }, []);

  const handleFocus = useCallback(
    (e: React.FocusEvent<HTMLInputElement, Element>) => {
      setActive(true);
      // props.onFocus && props.onFocus(e);
    },
    []
  );

  const dispatchInput = useCallback((value: string) => {
    const input: any = containerRef.current?.getElementsByTagName("input")[0];
    if (input) {
      const lastValue = input.value;
      input.value = value;
      setSearch(value);
      const event = new Event("input", { bubbles: true });
      const tracker = input._valueTracker;
      if (tracker) {
        tracker.setValue(lastValue);
      }
      input.dispatchEvent(event);
    }
    setActive(false);
  }, []);

  const showItemCountValue = Math.max(childrens.length, showItemCount);

  const style: React.CSSProperties = {
    ...getSizeProps(props),
    ...props.style,
  };

  return (
    <Styled.Container ref={containerRef} active={active} style={style}>
      {isSearchable ? (
        <Styled.Input
          value={search}
          placeholder={placeholder}
          onChange={handleChange}
          onFocus={handleFocus}
          onKeyUp={(e) => handleKeyDown(e)}
        />
      ) : (
        <Styled.Input
          value={value}
          placeholder={placeholder}
          onChange={handleChange}
          onFocus={handleFocus}
          readOnly
        />
      )}
      <ArrowButton
        handleOpenClick={handleActive}
        isOpen={active}
        direction={active ? "Up" : "Down"}
      />
      {active && (
        <Styled.List
          ref={listRef}
          itemHeight={itemStyle?.height ?? "35px"}
          showItemCount={showItemCountValue}
          style={listStyle}
        >
          {result.map((item, index) => (
            <Styled.Item
              key={index}
              ref={itemRef}
              active={value === item.props.value}
              onClick={() => dispatchInput(item.props.value)}
              style={itemStyle}
            >
              {item.props.children}
            </Styled.Item>
          ))}
        </Styled.List>
      )}
    </Styled.Container>
  );
};

export default Select;
