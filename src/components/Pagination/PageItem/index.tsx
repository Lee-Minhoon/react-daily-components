import * as Style from "../style";

interface PageItemProps {
  children: JSX.Element;
  activate: boolean;
  targetPage: number;
  handleClick: (targetPage: number) => void;
}

const PageItem = ({
  children,
  activate,
  targetPage,
  handleClick,
}: PageItemProps) => {
  return (
    <>
      {activate ? (
        <Style.PageItem
          activate={activate}
          onClick={() => handleClick(targetPage)}
        >
          {children}
        </Style.PageItem>
      ) : (
        <Style.PageItem activate={activate}>{children}</Style.PageItem>
      )}
    </>
  );
};

export default PageItem;
