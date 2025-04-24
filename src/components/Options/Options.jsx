import css from "./Options.module.css";

const Options = () => {
  return (
    <div className={css.container}>
      <button onClick={() => onFeedback("good")}>Good</button>
      <button onClick={() => onFeedback("neutral")}>Neutral</button>
      <button onClick={() => onFeedback("bad")}>Bad</button>
    </div>
  );
};

export default Options;
