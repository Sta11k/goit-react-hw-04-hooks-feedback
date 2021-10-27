import PropTypes from 'prop-types';
import Notification from '../Notification';

import s from './Statistics.module.css';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  const totalFeedback = total();
  const positiveResult = positivePercentage();

  return (
    <div>
      {!!totalFeedback ? (
        <ul>
          <li className={s.item}>
            <p>
              Good: <span className={s.value}>{good}</span>
            </p>
          </li>
          <li className={s.item}>
            <p>
              Neutral: <span className={s.value}>{neutral}</span>
            </p>
          </li>
          <li className={s.item}>
            <p>
              Bad: <span className={s.value}>{bad}</span>
            </p>
          </li>
          <li className={s.item}>
            <p>
              Total: <span className={s.value}>{totalFeedback}</span>
            </p>
          </li>
          <li className={s.item}>
            <p>
              Positive feedback:{' '}
              <span className={s.value}>{positiveResult}%</span>
            </p>
          </li>
        </ul>
      ) : (
        <Notification message={'No feedback given'} />
      )}
    </div>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.func.isRequired,
  positivePercentage: PropTypes.func.isRequired,
};

export default Statistics;