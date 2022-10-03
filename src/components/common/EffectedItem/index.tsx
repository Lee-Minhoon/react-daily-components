import { useTheme } from "@emotion/react";
import { forwardRef, useCallback } from "react";
import {
  ListItemDefaultProps,
  ListItemForwardedRef,
} from "../../../types/props";
import { rippleEffect } from "../../../utilities/css";
import { ItemBase } from "../../base/ItemBase";

export interface EffectedItemProps extends ListItemDefaultProps {
  // focus: boolean;
  active: boolean;
}

const EffectedItem = forwardRef(
  (props: EffectedItemProps, forwardedRef: ListItemForwardedRef) => {
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

export default EffectedItem;
