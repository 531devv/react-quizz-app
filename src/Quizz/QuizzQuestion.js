import React from 'react';
import './css/QuizzQuestion.css'

export default class QuizzQuestion extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="quizz-question">
                <p>{this.props.data.question}:</p>
            </div>
        );
    }
}