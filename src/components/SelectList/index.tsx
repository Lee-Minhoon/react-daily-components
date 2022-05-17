import * as Style from "./style";
import React, { useCallback, useEffect, useRef, useState } from "react";
import useInput from "../../hooks/useInput";

interface SelectListProps {
  itemList: Array<any>;
  value: any;
  handleSelect: (value: any) => void;
  isSearchable?: boolean;
  placeholder?: string;
  maxItemCount?: number;
  width?: number;
  height?: number;
  fontSize?: number;
  textColor?: string;
  borderRadius?: number;
  outlineWidth?: number;
  outlineColor?: string;
  selectListActiveStyle?: React.CSSProperties;
  selectListInactiveStyle?: React.CSSProperties;
  selectWrapperActiveStyle?: React.CSSProperties;
  selectWrapperInactiveStyle?: React.CSSProperties;
  listActiveStyle?: React.CSSProperties;
  listInactiveStyle?: React.CSSProperties;
  itemActiveStyle?: React.CSSProperties;
  itemInactiveStyle?: React.CSSProperties;
}

const SelectList = ({
  itemList,
  value,
  handleSelect,
  isSearchable: searchable = false,
  placeholder,
  maxItemCount = 8,
  width = 200,
  height = 30,
  fontSize = 16,
  textColor = "gray",
  borderRadius = 5,
  outlineWidth = 1,
  outlineColor = "gray",
  selectListActiveStyle,
  selectListInactiveStyle,
  selectWrapperActiveStyle,
  selectWrapperInactiveStyle,
  listActiveStyle,
  listInactiveStyle,
  itemActiveStyle,
  itemInactiveStyle,
}: SelectListProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [resultList, setResultList] = useState<Array<any>>(itemList);
  const searchInput = useInput("");
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const checkIfClickedOutside = (e: any) => {
      if (isOpen && !ref.current?.contains(e.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", checkIfClickedOutside);
    return () => {
      document.removeEventListener("mousedown", checkIfClickedOutside);
    };
  }, [isOpen]);

  const handleOpenClick = useCallback(() => {
    setIsOpen((prev) => !prev);
  }, []);

  const handleSelectClick = useCallback((item: any) => {
    setIsOpen(false);
    handleSelect(item);
    searchInput.setValue(item);
  }, []);

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent<HTMLInputElement>) => {
      if (e.nativeEvent.key === "Enter") {
        itemList.map((item) => {
          if (item.content === searchInput.value) handleSelect(item);
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

  return (
    <Style.SelectList
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
      style={isOpen ? selectListActiveStyle : selectListInactiveStyle}
    >
      <Style.SelectWrapper
        isOpen={isOpen}
        height={height}
        borderRadius={borderRadius}
        outlineWidth={outlineWidth}
        outlineColor={outlineColor}
        style={isOpen ? selectWrapperActiveStyle : selectWrapperInactiveStyle}
      >
        {searchable ? (
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
        <Style.Button onClick={handleOpenClick}>
          <Style.Svg
            viewBox="0 0 20 20"
            isOpen={isOpen}
            outlineColor={outlineColor}
            outlineWidth={outlineWidth}
          >
            <polyline points="2 6 10 14 18 6 10 14" />
          </Style.Svg>
        </Style.Button>
      </Style.SelectWrapper>
      {isOpen && (
        <Style.List
          maxItemCount={
            resultList.length > maxItemCount ? maxItemCount : resultList.length
          }
          height={height}
          fontSize={fontSize}
          textColor={textColor}
          borderRadius={borderRadius}
          outlineColor={outlineColor}
          style={isOpen ? listActiveStyle : listInactiveStyle}
        >
          {resultList.map((item, index) => (
            <Style.Item
              key={index}
              onClick={() => handleSelectClick(item)}
              height={height}
              borderRadius={borderRadius}
              style={isOpen ? itemActiveStyle : itemInactiveStyle}
            >
              {item}
            </Style.Item>
          ))}
        </Style.List>
      )}
    </Style.SelectList>
  );
};

export default SelectList;
