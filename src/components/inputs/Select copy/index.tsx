import * as Styled from "./style";
import React, {
  ReactNode,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";
import useInput from "../../../hooks/useInput";
import useClickOutside from "../../../hooks/useClickOutside";
import useModal from "../../../hooks/useModal";
import { SizeProps } from "../../../types/props";
import ArrowButton from "../../common/ArrowButton";
import useSetScrollPosition from "../../../hooks/useSetScrollPosition";
import { getSizeProps } from "utilities/props";
import useActive from "hooks/useActive";
import _ from "lodash";

interface SelectListProps extends SizeProps {
  children?: ReactNode;
  value: string;
  placeholder?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
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
  const [resultList, setResultList] = useState<Array<any>>(childrens);
  const [search, setSearch] = useState<string>("");
  const containerRef = useRef<HTMLDivElement>(null);
  const listRef = useRef<HTMLUListElement>(null);

  useClickOutside(containerRef, setActive);
  useSetScrollPosition(
    listRef,
    resultList.findIndex((item) => item === value) * props.itemStyle?.height,
    active
  );

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent<HTMLInputElement>) => {
      if (e.nativeEvent.key === "Enter") {
        childrens.map((item) => {
          if (item.props.value === search) onChange(item);
        });

        setActive(false);
      } else if (e.nativeEvent.key === "Escape") {
        setActive(false);
      } else {
        setResultList(
          childrens.filter((item) => {
            if (item.props.value.indexOf(search) !== -1) return item;
          })
        );
        setActive(true);
      }
    },
    [search]
  );

  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(e);
    setSearch(e.target.value);
  }, []);

  const handleItemClick = useCallback((value: string) => {
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

  const handleFocus = useCallback(
    (e: React.FocusEvent<HTMLInputElement, Element>) => {
      setActive(true);
      // props.onFocus && props.onFocus(e);
    },
    []
  );

  const showItemCountValue =
    childrens.length > showItemCount ? showItemCount : childrens.length;

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
          {resultList.map((item, index) => (
            <Styled.Item
              key={index}
              active={value === item.props.value}
              onClick={() => handleItemClick(item.props.value)}
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
