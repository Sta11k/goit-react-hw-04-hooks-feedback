import { useState } from "react";
import Section from "./componets/Section";
import FeedbackOptions from "./componets/FeedbackOptions";
import Statistics from "./componets/Statistics";

function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  // const [label, setLabel] = useState(0)

  const onLeaveFeedback = (event) => {
    let label = event.target.textContent;

    switch (label) {
      case "good":
        setGood((label) => (label += 1));
        break;
      case "neutral":
        setNeutral((label) => (label += 1));
        break;
      case "bad":
        setBad((label) => (label += 1));
        break;
      default:
        break;
    }

    // this.setState((prevState) => ({ [label]: (prevState[label] += 1) }));
  };

  const countTotalFeedback = ({ good, neutral, bad }) => {
    const total = Object.keys(good, neutral, bad).reduce(
      (acc, value) => acc + [value]
    );

    return total;
  };

  const countPositiveFeedbackPercentage = () => {
    const percent = Math.round((good * 100) / countTotalFeedback());

    return percent;
  };

  //   const { good, neutral, bad } = this.state;
  //   const {
  //     state,
  //     onLeaveFeedback,
  //     countTotalFeedback,
  //     countPositiveFeedbackPercentage,
  //   } = this;

  return (
    <>
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={{ good, neutral, bad }}
          onLeaveFeedback={onLeaveFeedback}
        />
      </Section>
      <Section title="Statistics">
        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          total={countTotalFeedback}
          positivePercentage={countPositiveFeedbackPercentage}
        />
      </Section>
    </>
  );
}

export default App;
