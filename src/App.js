import { useState } from "react";
import Section from "./componets/Section";
import FeedbackOptions from "./componets/FeedbackOptions";
import Statistics from "./componets/Statistics";

import { nameBtn } from "./options/options";

function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const onLeaveFeedback = (event) => {
    let label = event.target.textContent;
    console.log("label", label);
    switch (label) {
      case "good":
        setGood((prevGood) => (prevGood += 1));
        break;
      case "neutral":
        setNeutral((prevNeutral) => (prevNeutral += 1));
        break;
      case "bad":
        setBad((prevBad) => (prevBad += 1));
        break;
      default:
        break;
    }

    // this.setState((prevState) => ({ [label]: (prevState[label] += 1) }));
  };

  const countTotalFeedback = () => {
    return good + neutral + bad;
  };

  const countPositiveFeedbackPercentage = () => {
    const percent = Math.round((good / countTotalFeedback()) * 100) || 0;

    return percent;
  };

  return (
    <>
      <Section title="Please leave feedback">
        <FeedbackOptions options={nameBtn} onLeaveFeedback={onLeaveFeedback} />
      </Section>
      <Section title="Statistics">
        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          total={countTotalFeedback()}
          positivePercentage={countPositiveFeedbackPercentage()}
        />
      </Section>
    </>
  );
}

export default App;
