import "./App.styles.ts";
import { StyledTetris, StyledTetrisWrapper } from "./App.styles.ts";
import Display from "./components/Display/Display";
import Stage from "./components/Stage/Stage";
import StartButton from "./components/StartButton/StartButton";
import { createStage } from "./utils/gameHelpers.ts";
const App = () => {
  return (
    <StyledTetrisWrapper>
      <StyledTetris>
        <Stage stage={createStage()} />
        <aside>
          <div>
            <Display text="Score" />
            <Display text="Rows" />
            <Display text="Level" />
          </div>
          <StartButton callback={() => {}} />
        </aside>
      </StyledTetris>
    </StyledTetrisWrapper>
  );
};

export default App;
