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
  activeColor?: string;
  inactiveColor?: string;
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
  activeColor = "gray",
  inactiveColor = "silver",
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
      maxItemCount={maxItemCount}
      width={width}
      height={height}
      borderRadius={borderRadius}
      outlineWidth={outlineWidth}
      activeColor={activeColor}
      inactiveColor={inactiveColor}
      style={isOpen ? selectListActiveStyle : selectListInactiveStyle}
    >
      <Style.SelectWrapper
        isOpen={isOpen}
        height={height}
        borderRadius={borderRadius}
        outlineWidth={outlineWidth}
        activeColor={activeColor}
        inactiveColor={inactiveColor}
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
          <svg style={{ display: "block" }} viewBox="0 0 20 20">
            <polyline
              stroke={isOpen ? activeColor : inactiveColor}
              strokeWidth={1}
              points="2 6 10 14 18 6 10 14"
            />
          </svg>
        </Style.Button>
      </Style.SelectWrapper>
      {isOpen && (
        <Style.List
          maxItemCount={maxItemCount}
          height={height}
          fontSize={fontSize}
          textColor={textColor}
          borderRadius={borderRadius}
          activeColor={activeColor}
          inactiveColor={inactiveColor}
          style={isOpen ? listActiveStyle : listInactiveStyle}
        >
          {itemList.map((item, index) => (
            <Style.Item
              key={index}
              onClick={() => handleSelectClick(item)}
              height={height}
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
