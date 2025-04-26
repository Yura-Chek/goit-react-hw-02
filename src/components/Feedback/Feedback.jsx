import css from "./Feedback.module.css";

export default function feedback({ count, total, positiveFeedback }) {
  return (
    <div>
      <p>Good: {count.good}</p>
      <p>Neutral: {count.neutral}</p>
      <p>Bad: {count.bad}</p>
      <p>Total: {total}</p>
      <p>Posotive: {Math.round((positiveFeedback / total) * 100)}%</p>
    </div>
  );
}
