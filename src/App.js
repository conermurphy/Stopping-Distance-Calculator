import React from 'react';
import './App.css';

const QA = [
  {
    "ID": 1,
    "Question": "Q1",
    "Answer": "A1"
  },  
  {
    "ID": 2,
    "Question": "Q2",
    "Answer": "A2"
  },
  {
    "ID": 3,
    "Question": "Q3",
    "Answer": "A3"
  },  
  {
    "ID": 4,
    "Question": "Q4",
    "Answer": "A4"
  },
];

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userAnswer: "",
      result: "",
      ID: null,
      question: "",
      answer: ""
    }
  }

  handleChange = e => {
    this.setState({
      userAnswer: e.target.useranswer
    })
  }

  ranQuestionGen() {
    let ranNum = Math.floor(Math.random()*QA.length)
    let ranID = QA[ranNum].ID;
    let ranQuestion = QA[ranNum].Question;
    let ranAnswer = QA[ranNum].Answer;
    
    console.log(ranID, ranQuestion, ranAnswer)
    this.setState = ({
      ID: ranID,
      question: ranQuestion,
      answer: ranAnswer
    })
  }
  
  validateAnswer() {
    let correct;

    if (this.state.userAnswer === this.state.answer)  {
      correct = <p>this is correct</p>;
    } else  {
      correct = <p>Sorry, that is incorrect</p>;
    }

    this.setState({
      result: correct
    })
  }

  render() {
  return (
    <div className="container">
      <h1>Stopping Distance Revision!</h1>
      <div className="questionsAnswers">
        <div className="question">
          <h2>{this.state.ID}</h2>
          <p>{this.state.Question}</p>
        </div>
        <div className="submission">
          <form>
            <input type="text" name="answer" useranswer={this.state.userAnswer} onChange={this.handleChange} placeholder="Enter your answer here."></input>
          </form>
          <button onClick={this.validateAnswer}>Submit!</button>
        </div>
        <div className="answers">
            {this.state.result}
        </div>
      </div>
    </div>
  );
  }
}

export default App;
