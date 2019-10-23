import React from 'react'
import './App.css';

class Answer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userInput: "",
            userAnswer: ""
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    handleChange = e => {
        let value = e.target.value
        this.setState({
          userInput: value
        })
        console.log("ANSWER - input =",value)
    }

    handleClick() {
        console.log("ANSWER - Button clicked")
        let value = this.state.userInput
        this.setState({
            userAnswer: value,
            userInput: ""
        });
        console.log("ANSWER - answer =",value)
        this.props.callBackFromApp(value)


    }

    render() {
        return (
            <div className="answerContainer">
                <form>
                    <input type="text" name="answer" value={this.state.userInput} onChange={this.handleChange} placeholder="Enter your answer here."></input>
                </form>
                <button onClick={this.handleClick}>Submit</button>
            </div>
        )
    }
}

export default Answer