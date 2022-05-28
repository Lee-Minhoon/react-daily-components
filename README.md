Do not download this library.

It's still in the testing phase.

The official distribution is from version 1.0.0.

## Word

| props      | type                | desc         | default  |
| ---------- | ------------------- | ------------ | -------- |
| children   | string              | preparing... | required |
| fontSize?  | number              | preparing... | 16       |
| textColor? | string              | preparing... | "gray"   |
| textStyle? | React.CSSProperties | preparing... | -        |

## SelectList

| prop                       | type                 | desc         | default  |
| -------------------------- | -------------------- | ------------ | -------- |
| itemList                   | Array\<any\>         | preparing... | required |
| value                      | any                  | preparing... | required |
| handleSelect               | (value: any) => void | preparing... | required |
| isSearchable?              | boolean              | preparing... | false    |
| placholder?                | string               | preparing... | -        |
| maxItemCount?              | number               | preparing... | 8        |
| width?                     | number               | preparing... | 200      |
| height?                    | number               | preparing... | 30       |
| fontSize?                  | number               | preparing... | 16       |
| textColor?                 | string               | preparing... | "gray"   |
| borderRadius?              | number               | preparing... | 5        |
| outlineWidth?              | number               | preparing... | 1        |
| outlineColor?              | string               | preparing... | "gray"   |
| selectListActiveStyle?     | React.CSSProperties  | preparing... | -        |
| selectListInactiveStyle?   | React.CSSProperties  | preparing... | -        |
| selectWrapperActiveStyle?  | React.CSSProperties  | preparing... | -        |
| selectWrapperIactiveStyle? | React.CSSProperties  | preparing... | -        |
| listStyle?                 | React.CSSProperties  | preparing... | -        |
| itemStyle?                 | React.CSSProperties  | preparing... | -        |

# TimePicker

| props                       | type                 | desc         | default  |
| --------------------------- | -------------------- | ------------ | -------- |
| handleSelect                | (value: any) => void | preparing... | required |
| is24Hour?                   | boolean              | preparing... | false    |
| isSelectHour?               | boolean              | preparing... | true     |
| isSelectMin?                | boolean              | preparing... | true     |
| isSelectSeconds?            | boolean              | preparing... | false    |
| maxItemCount?               | number               | preparing... | 6        |
| width?                      | number               | preparing... | 200      |
| height?                     | number               | preparing... | 30       |
| fontSize?                   | number               | preparing... | 16       |
| textColor?                  | string               | preparing... | "gray"   |
| borderRadius?               | number               | preparing... | 5        |
| outlineWidth?               | number               | preparing... | 1        |
| outlineColor?               | string               | preparing... | "gray"   |
| selectListActiveStyle?      | React.CSSProperties  | preparing... | -        |
| selectListInactiveStyle?    | React.CSSProperties  | preparing... | -        |
| selectWrapperActiveStyle?   | React.CSSProperties  | preparing... | -        |
| selectWrapperInactiveStyle? | React.CSSProperties  | preparing... | -        |
| listContainerStyle?         | React.CSSProperties  | preparing... | -        |
| listStyle?                  | React.CSSProperties  | preparing... | -        |
| itemStyle?                  | React.CSSProperties  | preparing... | -        |

# DatePicker

| props                       | type                 | desc         | default  |
| --------------------------- | -------------------- | ------------ | -------- |
| handleSelect                | (value: any) => void | preparing... | required |
| width?                      | number               | preparing... | 200      |
| height?                     | number               | preparing... | 30       |
| fontSize?                   | number               | preparing... | 16       |
| textColor?                  | string               | preparing... | "gray"   |
| borderRadius?               | number               | preparing... | 5        |
| outlineWidth?               | number               | preparing... | 1        |
| outlineColor?               | string               | preparing... | "gray"   |
| selectListActiveStyle?      | React.CSSProperties  | preparing... | -        |
| selectListInactiveStyle?    | React.CSSProperties  | preparing... | -        |
| selectWrapperActiveStyle?   | React.CSSProperties  | preparing... | -        |
| selectWrapperInactiveStyle? | React.CSSProperties  | preparing... | -        |
| listContainerStyle?         | React.CSSProperties  | preparing... | -        |
| listStyle?                  | React.CSSProperties  | preparing... | -        |
| itemStyle?                  | React.CSSProperties  | preparing... | -        |

## Pagination

| props                 | type                         | desc         | default  |
| --------------------- | ---------------------------- | ------------ | -------- |
| currentPage           | number                       | preparing... | required |
| totalPages            | number                       | preparing... | required |
| block                 | number                       | preparing... | required |
| handleClick           | (targetPage: number) => void | preparing... | required |
| isShowFirstAndLast?   | boolean                      | preparing... | true     |
| isShowDeactiveButton? | boolean                      | preparing... | true     |
| width?                | number                       | preparing... | -        |
| gap?                  | number                       | preparing... | 10       |
| fontSize?             | number                       | preparing... | 16       |
| color?                | string                       | preparing... | "gray"   |
| containerStyle?       | React.CSSProperties          | preparing... | -        |
| firstPageRenderItem?  | JSX.Element                  | preparing... | -        |
| prevPageRenderItem?   | JSX.Element                  | preparing... | -        |
| nextPageRenderItem?   | JSX.Element                  | preparing... | -        |
| lastPageRenderItem?   | JSX.Element                  | preparing... | -        |

## LoadingBar

| props                | type    | desc         | default              |
| -------------------- | ------- | ------------ | -------------------- |
| spinnerSize?         | number  | preparing... | 50                   |
| spinnerBorderWidth?  | number  | preparing... | 5                    |
| spinnerBodyColor?    | string  | preparing... | "white"              |
| spinnerBarColor?     | string  | preparing... | "gray"               |
| backgroundColor?     | string  | preparing... | "rgba(0, 0, 0, 0.2)" |
| isBlockedBackground? | boolean | preparing... | true                 |
| isFullScreen?        | boolean | preparing... | true                 |
