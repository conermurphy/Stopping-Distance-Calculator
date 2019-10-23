import React from 'react';
import './App.css';
import Question from './Question'
import Answer from './Answer'
import Result from './Result.js'
import QA from './questions.json'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      questionNum: Math.floor(Math.random()*QA.length),
      userAnswerData: ""
    }

    this.nextQuestion = this.nextQuestion.bind(this);
  }

  nextQuestion() {
    console.log("Next Question clicked")
    this.setState({
      questionNum: Math.floor(Math.random()*QA.length),
      userAnswerData: ""
    })
  }

  userAnswerCallback = (userAnswer) => {
    let value = userAnswer
    this.setState({
      userAnswerData: value
    })
    console.log("APP - value = ",value)
  }

  render() {
  
  return (
    <div className="container">
      <h1>Stopping Distance Revision!</h1>
      <div className="subContainer">
        <Question number={this.state.questionNum}/>
        <Answer callBackFromApp={this.userAnswerCallback}/>
        <Result number={this.state.questionNum} userAnswer={this.state.userAnswerData}/>
        <button className="nextQuestionButton" onClick={this.nextQuestion}>Next Question</button>
      </div>
    </div>
  );
  }
}

export default App;
