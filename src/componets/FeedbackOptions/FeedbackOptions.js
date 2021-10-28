import PropTypes from "prop-types";

import s from "./FeedbackOptions.module.css";

const FeedbackBtn = ({ options, onLeaveFeedback }) => {
  console.log(" BTN", options);
  return (
    <ul className={s.list}>
      {options.map((btnName) => {
        return (
          <li className={s.item} key={btnName}>
            <button
              className={s.button}
              type="button"
              onClick={onLeaveFeedback}
            >
              {btnName}
            </button>
          </li>
        );
      })}
    </ul>
  );
};

FeedbackBtn.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string),
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackBtn;
