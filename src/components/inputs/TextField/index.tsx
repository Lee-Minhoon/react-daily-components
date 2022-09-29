import {
  FontProps,
  InputDefaultProps,
  InputForwardedRef,
  SizeProps,
  WhiteSpaceProps,
} from "../../../types/props";
import * as Styled from "./style";
import React, { forwardRef, useCallback, useState } from "react";
import {
  getFontProps,
  getSizeProps,
  getWhiteSpaceProps,
} from "../../../utilities/props";
import _ from "lodash";

interface TextFieldProps extends InputDefaultProps, WhiteSpaceProps {
  type?: "email" | "number" | "password" | "tel" | "text" | "url";
  label?: string;
  regex?: RegExp;
}

/**
 * TextField Component
 */
const TextField = forwardRef(
  (
    props: TextFieldProps & SizeProps & FontProps,
    forwardedRef: InputForwardedRef
  ) => {
    const { label, regex } = props;
    const [active, setActive] = useState<boolean>(false);

    const handleInput = useCallback(
      (e: React.FormEvent<HTMLInputElement>) => {
        e.currentTarget.value = e.currentTarget.value.replace(regex ?? "", "");
        props.onInput && props.onInput(e);
      },
      [regex]
    );

    const handleFocus = useCallback(
      (e: React.FocusEvent<HTMLInputElement, Element>) => {
        setActive(true);
        props.onFocus && props.onFocus(e);
      },
      []
    );

    const handleBlur = useCallback(
      (e: React.FocusEvent<HTMLInputElement, Element>) => {
        setActive(false);
        props.onBlur && props.onBlur(e);
      },
      []
    );

    const style: React.CSSProperties = {
      ...getSizeProps(props),
      ...getWhiteSpaceProps(props),
      ...getFontProps(props),
      ...props.style,
    };

    return (
      <Styled.Container active={active} style={style}>
        <Styled.Input
          {..._.omit(props, "style")}
          ref={forwardedRef}
          onInput={handleInput}
          onFocus={handleFocus}
          onBlur={handleBlur}
        />
        <Styled.Label>{label}</Styled.Label>
      </Styled.Container>
    );
  }
);

export default TextField;
