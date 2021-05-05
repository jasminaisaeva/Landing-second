import { MainBlock } from "./components/MainBlock";
import "./App.css";
import { Content } from "./components/Content";
import { BlockTwo } from "./components/Content/BlocksTwo/index.jsx";

function App() {
  return (
    <div className="App">
      <MainBlock />
      <Content />
      <BlockTwo />
    </div>
  );
}

export default App;
