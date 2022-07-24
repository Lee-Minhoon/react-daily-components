import { Theme } from "@emotion/react";
import { ContainerProps } from "../types/props";

interface Props extends ContainerProps {
  theme: Theme;
}

export const getWidth = (props: Props) => {
  return `${props.width}px`;
};

export const getHeight = (props: Props) => {
  return `${props.height}px`;
};

export const getFontSize = (props: Props) => {
  return `${props.fontSize ?? props.theme.fontSize ?? 16}px`;
};

export const getTextColor = (props: Props) => {
  return props.textColor ?? props.theme.textColor ?? "gray";
};

export const getBorderRadius = (props: Props) => {
  return `${props.borderRadius ?? props.theme.borderRadius ?? 5}px`;
};

export const getOutline = (props: Props) => {
  return `${props.outlineWidth ?? props.theme.outlineWidth ?? 1}px solid ${
    props.outlineColor ?? props.theme.outlineColor ?? "gray"
  }`;
};

export const getFullVirtualElement = () =>
  `content: "";
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;`;
