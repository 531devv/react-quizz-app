import React from 'react';
import './css/QuizzAnswer.css';

export default class QuizzAnswer extends React.Component {
    render() {
        const answers = this.props.data.answers.map((answer, i) => 
            <button type="text" className="grid-item" value={i} onClick={this.props.answer}>{answer}</button>
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