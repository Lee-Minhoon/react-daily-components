import {
  AllAbbrProps,
  AllProperties,
  InputDefaultProps,
  InputForwardedRef,
} from "../../../types/props";
import * as Styled from "./style";
import React, { forwardRef, useCallback, useState } from "react";

import _ from "lodash";
import { getStyleProps } from "../../../utilities/props";

interface TextFieldProps extends InputDefaultProps, AllAbbrProps {
  type?: "email" | "number" | "password" | "tel" | "text" | "url";
  label?: string;
  regex?: RegExp;
}

/**
 * TextField Component
 */
const TextField = forwardRef(
  (props: TextFieldProps & AllProperties, forwardedRef: InputForwardedRef) => {
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

    return (
      <Styled.Container active={active} style={getStyleProps(props)}>
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
