import { ContainerProps } from "../../types/props";
import * as Style from "./style";
import Background from "./../common/Background/index";
import Button from "../Button";
import { useRef } from "react";
import useClickOutside from "../../hooks/useClickOutside";

interface ModalProps extends ContainerProps {
  title: string;
  children: JSX.Element | string;
  handleConfirmClick: () => void;
  handleCancelClick: () => void;
  isFullScreen?: boolean;
  isBlockedBackground?: boolean;
  backgroundColor?: string;
}

const Modal = ({
  title,
  children,
  handleConfirmClick,
  handleCancelClick,
  isFullScreen = true,
  isBlockedBackground = true,
  width = 400,
  height,
  fontSize = 16,
  textColor = "gray",
  borderRadius = 5,
  outlineWidth = 0,
  outlineColor = "gray",
  backgroundColor = "rgba(0, 0, 0, 0.2)",
}: ModalProps) => {
  const containerRef = useRef(null);
  useClickOutside(containerRef, handleCancelClick);

  return (
    <Background
      backgroundColor={backgroundColor}
      isBlockedBackground={isBlockedBackground}
      isFullScreen={isFullScreen}
    >
      <Style.Container
        ref={containerRef}
        width={width}
        height={height}
        fontSize={fontSize}
        textColor={textColor}
        borderRadius={borderRadius}
        outlineWidth={outlineWidth}
        outlineColor={outlineColor}
      >
        <Style.Header fontSize={fontSize} outlineColor={outlineColor}>
          {title}
        </Style.Header>
        <Style.Content>{children}</Style.Content>
        <Style.Footer>
          <Button handleClick={handleCancelClick}>{"Cancel"}</Button>
          <Button handleClick={handleConfirmClick}>{"Confirm"}</Button>
        </Style.Footer>
      </Style.Container>
    </Background>
  );
};

export default Modal;
