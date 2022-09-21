import styled from "@emotion/styled";

export interface TableStyleProps {}
export interface TableHeadStyleProps {}
export interface TableBodyStyleProps {}
export interface TableRowStyleProps {}
export interface TableCellStyleProps {}

export const Table = styled.table<TableStyleProps>``;

export const TableHead = styled.thead<TableHeadStyleProps>``;

export const TableBody = styled.tbody<TableBodyStyleProps>``;

export const TableRow = styled.tr<TableRowStyleProps>``;

export const TableCell = styled.td<TableCellStyleProps>``;
