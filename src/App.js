import React from 'react';
import './App.css';

const QA = [
  {
    "ID": "1",
    "Question": "Q1",
    "Answer": "A1"
  },  
  {
    "ID": "2",
    "Question": "Q2",
    "Answer": "A2"
  },
  {
    "ID": "3",
    "Question": "Q3",
    "Answer": "A3"
  },  
  {
    "ID": "4",
    "Question": "Q4",
    "Answer": "A4"
  },
];


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      useranswer: "",
      result: "",
      ranNum: Math.floor(Math.random()*QA.length),
    }

    // this.answerCheck = this.answerCheck.bind(this);
  }

  handleChange = e => {
    this.setState({
      useranswer: e.target.value
    })
  }

  // answerCheck() {
  //   console.log("clicked")
  //   let checkOutcome;
  //   if (this.state.useranswer === QA[this.state.ranNum].Answer)  {
  //     console.log("Answer is correct")
  //     checkOutcome = <p>Answer is correct!</p>   
  //   } else {
  //     console.log("Answer is incorrect")
  //     checkOutcome = <p>Answer is incorrect!</p>
  //   }
  // }
  
  render() {

    let checkOutcome;
    if (this.state.useranswer === QA[this.state.ranNum].Answer)  {
      console.log("Answer is correct")
      checkOutcome = <p>Answer is correct!</p>   
    } else {
      console.log("Answer is incorrect")
      checkOutcome = <p>Answer is incorrect!</p>
    }

  return (
    <div className="container">
      <h1>Stopping Distance Revision!</h1>
        <div className="question">
          <h3>{QA[this.state.ranNum].ID}</h3>
          <p>{QA[this.state.ranNum].Question}</p>
        </div>
          <form>
            <input type="text" name="answer" value={this.state.useranswer} onChange={this.handleChange} placeholder="Enter your answer here."></input>
          </form>
          <button onClick={this.answerCheck}>Submit</button>
        <div className="answers">
            {checkOutcome}
        </div>
    </div>
  );
  }
}

export default App;
