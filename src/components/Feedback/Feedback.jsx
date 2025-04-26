import css from "./Feedback.module.css";

export default function Feedback({ count, total, positiveLevel }) {
  return (
    <div>
      <p>Good: {count.good}</p>
      <p>Neutral: {count.neutral}</p>
      <p>Bad: {count.bad}</p>
      <p>Total: {total}</p>
      <p>Posotive: {positiveLevel}%</p>
    </div>
  );
}
