import { useState, useEffect } from "react";
import Description from "./components/Description/Description";
import Feedback from "./components/Feedback/Feedback";
import Options from "./components/Options/Options";
import Notification from "./components/Notification/Notification";
import "./App.css";

export default function App() {
  const [responseType, setResponseType] = useState(() => {
    const savedFeedback = localStorage.getItem("responseType");
    return savedFeedback
      ? JSON.parse(savedFeedback)
      : { good: 0, neutral: 0, bad: 0 };
  });

  const updateFeedback = (feedbackType) => {
    setResponseType({
      ...responseType,
      [feedbackType]: responseType[feedbackType] + 1,
    });
  };

  const totalFeedback =
    responseType.good + responseType.neutral + responseType.bad;

  // const positiveFeedback = responseType.good + responseType.neutral;

  const positiveLevel =
    totalFeedback > 0
      ? Math.round((responseType.good / totalFeedback) * 100)
      : 0;

  const resetFeedback = () => {
    setResponseType({ good: 0, neutral: 0, bad: 0 });
  };
  useEffect(() => {
    localStorage.setItem("responseType", JSON.stringify(responseType));
  }, [responseType]);

  return (
    <div>
      <Description />
      <Options
        updateFeedback={updateFeedback}
        resetFeedback={resetFeedback}
        totalFeedback={totalFeedback}
      />
      {!totalFeedback && <Notification />}
      {totalFeedback > 0 && (
        <Feedback
          count={responseType}
          total={totalFeedback}
          positiveLevel={positiveLevel}
        />
      )}
    </div>
  );
}
