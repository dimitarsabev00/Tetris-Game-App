import React from "react";
import { TETROMINOS } from "../../utils/tetrominos";
import { StyledCell } from "./Cell.styles";

type CellProps = {
  type: keyof typeof TETROMINOS;
};
const Cell: React.FC<CellProps> = ({ type }) => (
  <StyledCell type={type} color={TETROMINOS[type].color} />
);

export default React.memo(Cell);
