import styled from "@emotion/styled";
import { ItemBase } from "../../base/ItemBase";
import { ContainerBase } from "../../base/ContainerBase";
import { InputBase } from "../../base/InputBase";
import { ListBase } from "../../base/ListBase";

export const Container = styled(ContainerBase)``;

export const Input = styled(InputBase)``;

export const ListContainer = styled(ListBase)`
  top: 55px;
  text-align: center;
`;

export const YearMonth = styled.div`
  color: ${({ theme }) => theme.defaultColor ?? "gray"};
  display: flex;
  align-items: center;
  justify-content: center;
  column-gap: 1em;
`;

export const WeekdayList = styled.ul`
  padding: 0;
  margin: 0;
  flex: 1;
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  list-style-type: none;
`;

export const WeekdayItem = styled.li`
  z-index: 1;
  font-size: 0.75rem;
`;

export const DateList = styled.ul`
  padding: 0;
  margin: 0;
  flex: 1;
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  list-style-type: none;
`;

export const DateItem = styled(ItemBase)`
  z-index: 1;
`;
