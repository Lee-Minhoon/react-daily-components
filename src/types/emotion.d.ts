import "@emotion/react";
import { ContainerProps } from "./props";

declare module "@emotion/react" {
  export interface Theme extends ContainerProps {}
}
