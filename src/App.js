import "./App.css";
import timelineData from "./data/timeline.json";
import Timeline from "./components/Timeline";

function App() {
  return (
    <div className="App-main">
      <Timeline event={timelineData["events"]} />
    </div>
  );
}

export default App;
