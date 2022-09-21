import {
  FontProps,
  InputDefaultProps,
  InputForwardedRef,
  SizeProps,
  WhiteSpaceProps,
} from "../../../types/props";
import { Container, Input, Label } from "./style";
import React, { forwardRef, useCallback } from "react";
import {
  getFontProps,
  getSizeProps,
  getWhiteSpaceProps,
} from "../../../utilities/props";

interface TextFieldProps extends InputDefaultProps, WhiteSpaceProps {
  label?: string;
  regex?: RegExp;
}

const TextField = forwardRef(
  (
    props: TextFieldProps & SizeProps & FontProps,
    forwardedRef: InputForwardedRef
  ) => {
    const { label, regex } = props;

    const handleInput = useCallback(
      (e: React.FormEvent<HTMLInputElement>) => {
        props.onInput && props.onInput(e);
        e.currentTarget.value = e.currentTarget.value.replace(regex ?? "", "");
      },
      [regex]
    );

    const style: React.CSSProperties = {
      ...getSizeProps(props),
      ...getWhiteSpaceProps(props),
      ...getFontProps(props),

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
        <Label style={{ ...getFontProps(props) }}>{label}</Label>
      </Container>
    );
  }
);

export default TextField;
