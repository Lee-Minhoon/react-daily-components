import {
  InputDefaultProps,
  InputForwardedRef,
  SizePropsT,
  WhiteSpaceProps,
} from "../../../types/props";
import { Container, Input, Label } from "./style";
import React, { forwardRef, useCallback } from "react";

interface TextFieldProps extends InputDefaultProps, WhiteSpaceProps {
  label?: string;
  regex?: RegExp;
}

const TextField = forwardRef(
  (props: TextFieldProps & SizePropsT, forwardedRef: InputForwardedRef) => {
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
      <Container>
        <Input
          {...props}
          ref={forwardedRef}
          onInput={handleInput}
          style={style}
        />
        <Label>{label}</Label>
      </Container>
    );
  }
);

export default TextField;
