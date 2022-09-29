import { OptionDefaultProps } from "../../../../types/props";
import * as Styled from "../style";

export interface OptionProps extends OptionDefaultProps {}

const Option = (props: OptionProps) => {
  return <Styled.Option {...props} />;
};

export default Option;
