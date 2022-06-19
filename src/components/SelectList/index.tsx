import * as Style from "./style";
import React, { useCallback, useRef, useState } from "react";
import useInput from "../../hooks/useInput";
import useClickOutside from "../../hooks/useClickOutside";
import useModal from "../../hooks/useModal";
import { ContainerProps } from "../../types/props";
import ArrowButton from "../common/ArrowButton";
import useSetScrollPosition from "../../hooks/useSetScrollPosition";

interface SelectListProps extends ContainerProps {
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

const SelectList = ({
  itemList,
  value,
  handleSelect,
  isSearchable = false,
  placeholder,
  maxItemCount = 8,
  width = 200,
  height = 30,
  fontSize = 16,
  textColor = "gray",
  borderRadius = 5,
  outlineWidth = 1,
  outlineColor = "gray",
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
      console.log("Here!@!!");
    },
    [searchInput.value]
  );

  return (
    <Style.Container
      ref={ref}
      isOpen={isOpen}
      maxItemCount={
        resultList.length > maxItemCount ? maxItemCount : resultList.length
      }
      width={width}
      height={height}
      borderRadius={borderRadius}
      outlineWidth={outlineWidth}
      outlineColor={outlineColor}
      style={isOpen ? containerActiveStyle : containerInactiveStyle}
    >
      <Style.SelectWrapper
        isOpen={isOpen}
        height={height}
        borderRadius={borderRadius}
        outlineWidth={outlineWidth}
        outlineColor={outlineColor}
        style={isOpen ? selectWrapperActiveStyle : selectWrapperInactiveStyle}
      >
        {isSearchable ? (
          <Style.Input
            {...searchInput}
            placeholder={placeholder}
            fontSize={fontSize}
            textColor={textColor}
            onKeyUp={(e) => handleKeyDown(e)}
          />
        ) : (
          <Style.Input
            value={value}
            placeholder={placeholder}
            readOnly
            fontSize={fontSize}
            textColor={textColor}
          />
        )}
        <ArrowButton
          handleOpenClick={handleOpenClick}
          isOpen={isOpen}
          outlineColor={outlineColor}
          outlineWidth={outlineWidth}
          direction={isOpen ? "Up" : "Down"}
        />
      </Style.SelectWrapper>
      {isOpen && (
        <Style.List
          ref={listRef}
          maxItemCount={
            resultList.length > maxItemCount ? maxItemCount : resultList.length
          }
          height={height}
          fontSize={fontSize}
          textColor={textColor}
          borderRadius={borderRadius}
          outlineWidth={outlineWidth}
          outlineColor={outlineColor}
          style={listStyle}
        >
          {resultList.map((item, index) => (
            <Style.Item
              key={index}
              isSelected={value === item}
              onClick={() => handleSelectClick(item)}
              height={height}
              borderRadius={borderRadius}
              style={itemStyle}
            >
              {item}
            </Style.Item>
          ))}
        </Style.List>
      )}
    </Style.Container>
  );
};

export default SelectList;
