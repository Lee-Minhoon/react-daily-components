import * as Style from "./style";
import { useCallback, useEffect, useRef, useState } from "react";

interface SelectListProps {
  itemList: Array<any>;
  value: any;
  handler: (value: any) => void;
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
  handler,
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
    handler(item);
  }, []);

  return (
    <Style.SelectList
      ref={ref}
      isOpen={isOpen}
      maxItemCount={
        itemList.length > maxItemCount ? maxItemCount : itemList.length
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
        <Style.Input
          value={value}
          placeholder={placeholder}
          readOnly
          fontSize={fontSize}
          textColor={textColor}
        />
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
            itemList.length > maxItemCount ? maxItemCount : itemList.length
          }
          height={height}
          fontSize={fontSize}
          textColor={textColor}
          borderRadius={borderRadius}
          outlineColor={outlineColor}
          style={isOpen ? listActiveStyle : listInactiveStyle}
        >
          {itemList.map((item, index) => (
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
