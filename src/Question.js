import React from 'react'
import QA from './questions.json'
import './App.css';

class Question extends React.Component {
    render(){
    return (
        <div className="QuestionContainer">
            <h3 className="QuestionID">Q{QA[this.props.number].ID}:</h3>
            <h4 className="Question">{QA[this.props.number].Question}</h4>
        </div>
    )
    }
}

export default Question