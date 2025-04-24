import { useState } from "react";
import Description from "./components/Description/Description";
// import Feedback from "./components/Feedback/Feedback";
import Options from "./components/Options/Options";
import "./App.css";

const App = () => {
  const [feedback, setFeedback] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  return (
    <div>
      <Description />
      good: 0, neutral: 0, bad: 0
      <Options />
    </div>
  );
};

export default App;
