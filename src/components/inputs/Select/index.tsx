import * as Styled from "./style";
import React, { useCallback, useRef, useState } from "react";
import useInput from "../../../hooks/useInput";
import useClickOutside from "../../../hooks/useClickOutside";
import useModal from "../../../hooks/useModal";
import { SizePropsDeprecated } from "../../../types/props";
import ArrowButton from "../../common/ArrowButton";
import useSetScrollPosition from "../../../hooks/useSetScrollPosition";

interface SelectListProps extends SizePropsDeprecated {
  itemList: Array<string>;
  value: string;
  handleSelect: (value: string) => void;
  isSearchable?: boolean;
  placeholder?: string;
  maxItemCount?: number;
  containerActiveStyle?: React.CSSProperties;
  containerInactiveStyle?: React.CSSProperties;
  selectWrapperActiveStyle?: React.CSSProperties;
  selectWrapperInactiveStyle?: React.CSSProperties;
  listStyle?: React.CSSProperties;
  itemStyle?: React.CSSProperties;
}

const Select = ({
  itemList,
  value,
  handleSelect,
  isSearchable = false,
  placeholder,
  maxItemCount = 8,
  width = 200,
  height = 35,
  containerActiveStyle,
  containerInactiveStyle,
  selectWrapperActiveStyle,
  selectWrapperInactiveStyle,
  listStyle,
  itemStyle,
}: SelectListProps) => {
  const { isOpen, setIsOpen, handleOpenClick } = useModal();
  const [resultList, setResultList] = useState<Array<string>>(itemList);
  const searchInput = useInput("");
  const ref = useRef<HTMLDivElement>(null);
  const listRef = useRef<HTMLUListElement>(null);

  useClickOutside(ref, setIsOpen);
  useSetScrollPosition(
    listRef,
    resultList.findIndex((item) => item === value) * height,
    isOpen
  );

  const handleSelectClick = useCallback((item: any) => {
    setIsOpen(false);
    handleSelect(item);
    searchInput.setValue(item);
  }, []);

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent<HTMLInputElement>) => {
      if (e.nativeEvent.key === "Enter") {
        itemList.map((item) => {
          if (item === searchInput.value) handleSelect(item);
        });
        setIsOpen(false);
      } else if (e.nativeEvent.key === "Escape") {
        setIsOpen(false);
      } else {
        setResultList(
          itemList.filter((item) => {
            if (item.indexOf(searchInput.value) !== -1) return item;
          })
        );
        setIsOpen(true);
      }
    },
    [searchInput.value]
  );

  const maxItemCountValue =
    resultList.length > maxItemCount ? maxItemCount : resultList.length;

  return (
    <Styled.Container
      ref={ref}
      active={isOpen}
      maxItemCount={maxItemCountValue}
      width={width}
      height={height}
      style={isOpen ? containerActiveStyle : containerInactiveStyle}
    >
      <Styled.SelectWrapper
        isOpen={isOpen}
        height={height}
        style={isOpen ? selectWrapperActiveStyle : selectWrapperInactiveStyle}
      >
        {isSearchable ? (
          <Styled.Input
            {...searchInput}
            placeholder={placeholder}
            onKeyUp={(e) => handleKeyDown(e)}
          />
        ) : (
          <Styled.Input value={value} placeholder={placeholder} readOnly />
        )}
        <ArrowButton
          handleOpenClick={handleOpenClick}
          isOpen={isOpen}
          direction={isOpen ? "Up" : "Down"}
        />
      </Styled.SelectWrapper>
      {isOpen && (
        <Styled.List
          ref={listRef}
          isOpen={isOpen}
          maxItemCount={maxItemCountValue}
          height={height}
          style={listStyle}
        >
          {resultList.map((item, index) => (
            <Styled.Item
              key={index}
              active={value === item}
              onClick={() => handleSelectClick(item)}
              height={height}
              style={itemStyle}
            >
              {item}
            </Styled.Item>
          ))}
        </Styled.List>
      )}
    </Styled.Container>
  );
};

export default Select;
