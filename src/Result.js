import React from 'react'
import QA from './questions.json'
import './App.css';

class Result extends React.Component    {

    render() {

        console.log("RESULT - Correct Answer = ", QA[this.props.number].Answer)
        console.log("RESULT - userAnswer = ", this.props.userAnswer)
        
        if (this.props.userAnswer === "")    {
            return (<p className="resultText">Please enter an Answer</p>)
        } else if (QA[this.props.number].Answer === this.props.userAnswer) {
            return (<p className="resultText">Correct!</p>)
        } else  {
            return (<p className="resultText">Unfortunately that is incorrect!</p>)
        }


    }
}

export default Result