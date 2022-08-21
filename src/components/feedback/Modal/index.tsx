import { SizeProps } from "../../../types/props";
import * as Style from "./style";
import Background from "../../common/Background/index";
import Button from "../../inputs/Button";
import { useRef } from "react";
import useClickOutside from "../../../hooks/useClickOutside";

interface ModalProps extends SizeProps {
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
      <Style.Container ref={containerRef} width={width} height={height}>
        <Style.Header>{title}</Style.Header>
        <Style.Content>{children}</Style.Content>
        <Style.Footer>
          <Button onClick={handleCancelClick}>{"Cancel"}</Button>
          <Button onClick={handleConfirmClick}>{"Confirm"}</Button>
        </Style.Footer>
      </Style.Container>
    </Background>
  );
};

export default Modal;
