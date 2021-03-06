import React from 'react';
import QuizzAnswer from './QuizzAnswer';
import './css/QuizzAnswers.css';

export default class QuizzAnswers extends React.Component {
    render() {
        return (
            <div className="quizz-answers">
                <QuizzAnswer data={this.props.data} answer={this.props.answer}/>
            </div>
        );
    }
}