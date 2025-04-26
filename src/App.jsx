import { useState, useEffect } from "react";
import Description from "./components/Description/Description";
import Feedback from "./components/Feedback/Feedback";
import Options from "./components/Options/Options";
import Notification from "./components/Notification/Notification";
import "./App.css";

export default function App() {
  const [responseType, setResponseType] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  const updateFeedback = (feedbackType) => {
    setResponseType({
      ...responseType,
      [feedbackType]: responseType[feedbackType] + 1,
    });
  };

  const totalFeedback =
    responseType.good + responseType.neutral + responseType.bad;

  const positiveFeedback = responseType.good + responseType.neutral;

  const resetFeedback = () => {
    setResponseType({ good: 0, neutral: 0, bad: 0 });
  };
  useEffect(() => {
    localStorage.setItem("responseType", JSON.stringify(responseType));
  }, [responseType]);

  return (
    <div>
      <Description />
      <Options updateFeedback={updateFeedback} resetFeedback={resetFeedback} />
      {!totalFeedback && <Notification />}
      {totalFeedback > 0 && (
        <Feedback
          count={responseType}
          updateFeedback={updateFeedback}
          total={totalFeedback}
          positiveFeedback={positiveFeedback}
        />
      )}
    </div>
  );
}
