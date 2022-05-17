import * as Style from "./style";
import React, { useCallback, useEffect, useRef, useState } from "react";
import useInput from "../../hooks/useInput";

interface TextProps {
  children: string;
  fontSize?: number;
  textColor?: string;
  textStyle?: React.CSSProperties;
}

const Word = ({
  children,
  fontSize = 16,
  textColor = "gray",
  textStyle,
}: TextProps) => {
  return (
    <Style.Word fontSize={fontSize} textColor={textColor} style={textStyle}>
      {children}
    </Style.Word>
  );
};

export default Word;
