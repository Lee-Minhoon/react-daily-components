import {
  InputDefaultProps,
  SizePropsT,
  WhiteSpaceProps,
} from "../../../types/props";
import * as Style from "./style";
import React, { forwardRef, useCallback, useState } from "react";

interface InputProps extends InputDefaultProps, WhiteSpaceProps {
  label?: string;
  regex?: RegExp;
}

const TextInput = forwardRef(
  (props: InputProps & SizePropsT, forwardedRef: any) => {
    const { label, regex } = props;

    const handleInput = useCallback(
      (e: React.FormEvent<HTMLInputElement>) => {
        props.onInput && props.onInput(e);
        e.currentTarget.value = e.currentTarget.value.replace(regex ?? "", "");
      },
      [regex]
    );

    const style: React.CSSProperties = {
      width: props.width ?? props.w,
      height: props.height ?? props.h,
      margin: props.margin ?? props.m,
      padding: props.padding ?? props.p,

      ...props.style,
    };

    return (
      <Style.Container>
        <Style.TextInput
          {...props}
          ref={forwardedRef}
          onInput={handleInput}
          style={style}
        />
        <Style.Label>{label}</Style.Label>
      </Style.Container>
    );
  }
);

export default TextInput;
