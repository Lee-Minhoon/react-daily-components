import { Theme } from "@emotion/react";

interface Props {
  theme: Theme;
}

export const getPrimaryColor = (props: Props) => {
  return props.theme.primaryColor ?? "gray";
};

export const getDefaultColor = (props: Props) => {
  return props.theme.defaultColor ?? "gray";
};
