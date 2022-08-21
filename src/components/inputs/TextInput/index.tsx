import { ContainerProps, InputDefaultProps } from "../../../types/props";
import * as Style from "./style";
import React, { forwardRef, useCallback, useState } from "react";

interface InputProps extends ContainerProps {
  regex?: RegExp;
  containerStyle?: React.CSSProperties;
}

const TextInput = forwardRef(
  (props: InputProps & InputDefaultProps, forwardedRef: any) => {
    const { regex, width = 200, height = 35, containerStyle } = props;
    const [isFocus, setIsFocus] = useState<boolean>(false);

    const handleInput = useCallback(
      (e: React.FormEvent<HTMLInputElement>) => {
        props.onInput && props.onInput(e);
        e.currentTarget.value = e.currentTarget.value.replace(regex ?? "", "");
      },
      [regex]
    );

    const handleFoucs = useCallback(
      (e: React.FocusEvent<HTMLInputElement>) => {
        props.onFocus && props.onFocus(e);
        setIsFocus(true);
      },
      [setIsFocus]
    );

    const handleBlur = useCallback(
      (e: React.FocusEvent<HTMLInputElement>) => {
        props.onBlur && props.onBlur(e);
        setIsFocus(false);
      },
      [setIsFocus]
    );

    return (
      <Style.InputContainer
        isActive={isFocus}
        width={width}
        height={height}
        style={containerStyle}
      >
        <Style.Input
          {...props}
          ref={forwardedRef}
          onInput={handleInput}
          onFocus={handleFoucs}
          onBlur={handleBlur}
        />
      </Style.InputContainer>
    );
  }
);

export default TextInput;
