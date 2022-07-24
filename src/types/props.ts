import {
  DetailedHTMLProps,
  ButtonHTMLAttributes,
  InputHTMLAttributes,
} from "react";

export interface SizeProps {
  width?: number;
  height?: number;
}

export interface ContainerProps extends SizeProps {
  fontSize?: number;
  textColor?: string;
  borderRadius?: number;
  outlineWidth?: number;
  outlineColor?: string;
}

export type ButtonDefaultProps = DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>;

export type InputDefaultProps = DetailedHTMLProps<
  InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>;
