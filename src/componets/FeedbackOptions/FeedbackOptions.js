import PropTypes from 'prop-types';

import s from './FeedbackOptions.module.css';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <ul className={s.list}>
      {Object.keys(options).map(btnName => {
        console.log(Object.keys(options))
        return (
          <li className={s.item} key={btnName}>
            <button className={s.button} type="button" onClick={onLeaveFeedback}>
              {btnName}
            </button>
          </li>
        );
      })}
    </ul>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.object.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;