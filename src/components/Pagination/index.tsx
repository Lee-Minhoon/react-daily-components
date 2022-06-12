import PageItem from "./PageItem";
import * as Style from "./style";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  block: number;
  handleClick: (targetPage: number) => void;
  isShowFirstAndLast?: boolean;
  isShowDeactiveButton?: boolean;
  width?: number;
  gap?: number;
  fontSize?: number;
  color?: string;
  containerStyle?: React.CSSProperties;
  firstPageRenderItem?: JSX.Element;
  prevPageRenderItem?: JSX.Element;
  nextPageRenderItem?: JSX.Element;
  lastPageRenderItem?: JSX.Element;
}

const Pagination = ({
  currentPage,
  totalPages,
  block,
  handleClick,
  isShowFirstAndLast = true,
  isShowDeactiveButton = true,
  width,
  gap = 10,
  fontSize = 16,
  color = "gray",
  containerStyle,
  firstPageRenderItem,
  prevPageRenderItem,
  nextPageRenderItem,
  lastPageRenderItem,
}: PaginationProps) => {
  const currentBlock: number = Math.floor((currentPage - 1) / block) + 1;
  const startPage: number = currentBlock * block - (block - 1);
  const endPage: number = Math.min(currentBlock * block, totalPages);

  const render = () => {
    const result = [];

    const isFristPageActivate = !(currentPage === 1);
    const isShowFirstPage =
      isShowDeactiveButton || (!isShowDeactiveButton && isFristPageActivate);
    result.push(
      isShowFirstAndLast && isShowFirstPage && (
        <PageItem
          key={"firstPage"}
          activate={isFristPageActivate}
          targetPage={1}
          handleClick={handleClick}
        >
          {firstPageRenderItem ?? (
            <Style.Svg
              viewBox="0 0 20 20"
              activate={isFristPageActivate}
              color={color}
            >
              <polyline points="18 2 10 10 18 18 10 10" />
              <polyline points="10 2 2 10 10 18 2 10" />
            </Style.Svg>
          )}
        </PageItem>
      )
    );

    const isPrevPageActivate = startPage > 1;
    const isShowPrevPage =
      isShowDeactiveButton || (!isShowDeactiveButton && isPrevPageActivate);
    result.push(
      isShowPrevPage && (
        <PageItem
          key={"prevPage"}
          activate={isPrevPageActivate}
          targetPage={startPage - 1}
          handleClick={handleClick}
        >
          {prevPageRenderItem ?? (
            <Style.Svg
              viewBox="0 0 20 20"
              activate={isPrevPageActivate}
              color={color}
            >
              <polyline points="14 2 6 10 14 18 6 10" />
            </Style.Svg>
          )}
        </PageItem>
      )
    );

    for (let i = startPage; i <= endPage; i++) {
      const activate = !(i === currentPage);
      result.push(
        <PageItem
          key={i}
          activate={activate}
          targetPage={i}
          handleClick={handleClick}
        >
          <Style.Item activate={activate} fontSize={fontSize} color={color}>
            {i}
          </Style.Item>
        </PageItem>
      );
    }

    const isNextPageActivate = endPage < totalPages;
    const isShowNextPage =
      isShowDeactiveButton || (!isShowDeactiveButton && isNextPageActivate);
    result.push(
      isShowNextPage && (
        <PageItem
          key={"nextPage"}
          activate={isNextPageActivate}
          targetPage={endPage + 1}
          handleClick={handleClick}
        >
          {nextPageRenderItem ?? (
            <Style.Svg
              viewBox="0 0 20 20"
              activate={isNextPageActivate}
              color={color}
            >
              <polyline points="6 2 14 10 6 18 14 10" />
            </Style.Svg>
          )}
        </PageItem>
      )
    );

    const isLastPageActivate = !(currentPage === totalPages);
    const isShowLastPage =
      isShowDeactiveButton || (!isShowDeactiveButton && isLastPageActivate);
    result.push(
      isShowFirstAndLast && isShowLastPage && (
        <PageItem
          key={"lastPage"}
          activate={isLastPageActivate}
          targetPage={totalPages}
          handleClick={handleClick}
        >
          {lastPageRenderItem ?? (
            <Style.Svg
              viewBox="0 0 20 20"
              activate={isLastPageActivate}
              color={color}
            >
              <polyline points="10 2 18 10 10 18 18 10" />
              <polyline points="2 2 10 10 2 18 10 10" />
            </Style.Svg>
          )}
        </PageItem>
      )
    );

    return result;
  };

  return (
    <Style.Container width={width} fontSize={fontSize} style={containerStyle}>
      <Style.List gap={gap}>{render()}</Style.List>
    </Style.Container>
  );
};

export default Pagination;
