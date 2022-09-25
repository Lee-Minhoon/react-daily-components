import { Theme } from "@emotion/react";

interface Props {
  theme: Theme;
  active?: boolean;
}

export const getColorByStatus = (props: Props) => {
  return props.active ? getPrimaryColor(props) : getDefaultColor(props);
};

export const getPrimaryColor = (props: Props | Theme) => {
  if ("primaryColor" in props) return props.primaryColor ?? "gray";
  return props.theme.primaryColor ?? "gray";
};

export const getDefaultColor = (props: Props | Theme) => {
  if ("defaultColor" in props) return props.defaultColor ?? "gray";
  return props.theme.defaultColor ?? "gray";
};
