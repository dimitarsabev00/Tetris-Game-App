import React from "react";
import { StyledStartButton } from "./StartButton.styles";

type StartButtonProps = {
  callback: () => void;
};

const StartButton: React.FC<StartButtonProps> = ({ callback }) => (
  <StyledStartButton onClick={callback}>Start Game</StyledStartButton>
);

export default StartButton;
