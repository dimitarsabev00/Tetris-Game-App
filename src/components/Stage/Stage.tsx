import React from "react";
import Cell from "../Cell/Cell";
import { TETROMINOS } from "../../utils/tetrominos";
import { StyledStage } from "./Stage.styles";

export type STAGECELL = [keyof typeof TETROMINOS, string];
export type STAGE = STAGECELL[][];

type StageProps = {
  stage: STAGE;
};

const Stage: React.FC<StageProps> = ({ stage }) => (
  <StyledStage width={stage[0].length} height={stage.length}>
    {stage.map((row) => row.map((cell, x) => <Cell key={x} type={cell[0]} />))}
  </StyledStage>
);

export default Stage;
