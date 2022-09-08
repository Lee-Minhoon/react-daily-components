import {
  BackgroundProps,
  BorderProps,
  ContainerPropsT,
  ElementProps,
  FontProps,
  SizePropsT,
  WhiteSpaceProps,
} from "../types/props";

export const getContainerProps = (props: ContainerPropsT) => {
  return {
    ...getSizeProps(props),
    ...getWhiteSpaceProps(props),
    ...getBackgroundProps(props),
    maxWidth: props.maxWidth ?? props.mw,
    maxHeight: props.maxHeight ?? props.mh,
  };
};

export const getElementProps = (props: ElementProps) => {
  return {
    ...getSizeProps(props),
    ...getWhiteSpaceProps(props),
    ...getBackgroundProps(props),
  };
};

export const getSizeProps = (props: SizePropsT) => {
  return {
    width: props.width ?? props.w,
    height: props.height ?? props.h,
  };
};

export const getWhiteSpaceProps = (props: WhiteSpaceProps) => {
  return {
    margin: props.margin ?? props.m,
    padding: props.padding ?? props.p,
  };
};

export const getBackgroundProps = (props: BackgroundProps) => {
  return {
    background: props.background ?? props.bg,
    backgroundColor: props.backgroundColor ?? props.bgc,
  };
};

export const getBorderProps = (props: BorderProps) => {
  return {
    border: props.border ?? props.bd,
    borderRadius: props.borderRadius ?? props.bdr,
    boxShadow: props.boxShadow ?? props.bs,
  };
};

export const getFontProps = (props: FontProps) => {
  return {
    color: props.color ?? props.c,
    font: props.font,
    fontStyle: props.fontStyle ?? props.fst,
    fontWeight: props.fontWeight ?? props.fw,
    fontSize: props.fontSize ?? props.fsz,
    fontFamily: props.fontFamily ?? props.ff,
    fontVariant: props.fontVariant ?? props.fv,
    lineHeight: props.lineHeight ?? props.lh,
    textDecoration: props.textDecoration ?? props.td,
  };
};
