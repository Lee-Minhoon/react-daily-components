import {
  DetailedHTMLProps,
  ButtonHTMLAttributes,
  InputHTMLAttributes,
  HTMLAttributes,
} from "react";
import type { StandardProperties } from "csstype";

export interface SizeProps {
  width?: number;
  height?: number;
}

export interface ContainerProps extends SizeProps {}

export interface SizePropsT {
  width?: StandardProperties["width"];
  w?: StandardProperties["width"];
  height?: StandardProperties["height"];
  h?: StandardProperties["height"];
  maxWidth?: StandardProperties["maxWidth"];
  mw?: StandardProperties["maxWidth"];
  maxHeight?: StandardProperties["maxWidth"];
  mh?: StandardProperties["maxHeight"];
}

export interface WhiteSpaceProps {
  margin?: StandardProperties["margin"];
  m?: StandardProperties["margin"];
  padding?: StandardProperties["padding"];
  p?: StandardProperties["padding"];
}

export type DivDefaultProps = DetailedHTMLProps<
  HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
>;

export type ParagraphDefaultProps = DetailedHTMLProps<
  HTMLAttributes<HTMLParagraphElement>,
  HTMLParagraphElement
>;

export type SpanDefaultProps = DetailedHTMLProps<
  HTMLAttributes<HTMLSpanElement>,
  HTMLSpanElement
>;

export type ButtonDefaultProps = DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>;

export type InputDefaultProps = DetailedHTMLProps<
  InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>;
