import React from 'react';
import './css/QuizzAnswer.css';

export default class QuizzAnswer extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        const answers = this.props.data.answers.map((answer) => 
            <div className="grid-item">{answer}</div>
        );
        return (
            <div className="quizz-answer">
                <div className="grid">
                    {answers}
                </div>
            </div>
        );
    }
}