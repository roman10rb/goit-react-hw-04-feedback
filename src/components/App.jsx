import { useState } from "react";
import Statistics from "./Statistics/Statistics";
import Notification from "./Notification/Notification";
import  FeedbackOptions  from "./FeedbackOptions/FeedbackOptions";
import Section from "./Section/Section";

 
const App = () => {
  
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const optiuons = {
    good,
    neutral,
    bad,
  };


  const onLeaveFeedback = (options) => {
   
    if (options === 'good') {
      setGood(prevState => prevState + 1)
      return;
    }
    if (options === 'neutral') {
      setNeutral(prevState => prevState + 1)
      return;
    }
    if (options === 'bad') {
      setBad(prevState => prevState + 1)
      return;
    }
    
  };


 const  countTotalFeedback = () => {
    
   return good + neutral + bad;
  };
  
  
 const countPositiveFeedbackPercentage = () => {
    return Math.round(good / countTotalFeedback() * 100);
  };
  
   
    const total = countTotalFeedback();
    return (
      <div className="container">
        <Section  title="Please leave feedback">
          <FeedbackOptions options={optiuons} onLeaveFeedback={onLeaveFeedback} />
        </Section>
        <Section title="Statistics">
          {total === 0
            ? <Notification message="There is no feedback" />
            : <Statistics good={good} neutral={neutral} bad={bad} total={total} positivePercentage={countPositiveFeedbackPercentage(total)}></Statistics>}
        </Section>
      </div>
    )
  

};

export default App;