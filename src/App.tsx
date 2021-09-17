import "./App.css";
import { StackView } from "./components/StackView";
import { SampleChild } from "./components/SampleChild";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <StackView>
          {[...new Array(10)].map((_, i) => (
            <div>
              これは{i + 1}こめです
              <SampleChild />
            </div>
          ))}
        </StackView>
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
