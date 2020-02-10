import React from 'react';
import QuizzQuestions from './QuizzQuestions';
import QuizzAnswers from './QuizzAnswers';
import './css/QuizzContainer.css';

export default class QuizzContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            randomKey: this.props.data.questions[Math.floor(Math.random() * this.props.data.questions.length)]
        }
    }

    render() {
        return(
            <div className="quizz-container">
                <QuizzQuestions data={this.state.randomKey} />
                <QuizzAnswers data={this.state.randomKey} />
            </div>
        );
    }
}