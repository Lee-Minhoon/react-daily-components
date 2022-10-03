import styled from "@emotion/styled";
import { getColorByStatus, rippleEffect } from "../../../utilities/css";
import { forwardRef, useCallback } from "react";
import { useTheme } from "@emotion/react";
import { ListItemDefaultProps } from "../../../types/props";

export interface ItemBaseStyleProps {
  // focus: boolean;
  active: boolean;
}

export const ItemBase = styled.li<ItemBaseStyleProps>`
  position: relative;
  cursor: pointer;
  color: ${(props) => getColorByStatus(props)};
  height: 35px;
  line-height: 35px;
  padding: 0 10px;
`;

interface EffectedItemBaseProps extends ListItemDefaultProps {
  // focus: boolean;
  active: boolean;
}

export const EffectedItemBase = forwardRef(
  (props: EffectedItemBaseProps, forwardedRef: any) => {
    const theme = useTheme();
    const { onClick = () => {} } = props;

    const handleClick = useCallback(
      (event: any) => {
        rippleEffect(event, theme, true);
        onClick(event);
      },
      [onClick]
    );

    return <ItemBase {...props} ref={forwardedRef} onClick={handleClick} />;
  }
);
