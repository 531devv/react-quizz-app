import React from 'react';
import QuizzQuestions from './QuizzQuestions';
import QuizzAnswers from './QuizzAnswers';
import './css/QuizzContainer.css';

export default class QuizzContainer extends React.Component {
    constructor(props) {
        super(props);
        const randomQuestion = Math.floor(Math.random() * this.props.data.questions.length);
        this.state = {
            randomKey: this.props.data.questions[randomQuestion],
            randomQuestionIndex: randomQuestion,
            points: 0,
            completeQuestions: []
        }
        this.getAnswer = this.getAnswer.bind(this);
    }

    getAnswer(e) {
        e.preventDefault();
        const currentCompleteQuestions = this.state.completeQuestions;
        const randomQuestion = Math.floor(Math.random() * this.props.data.questions.length)
        currentCompleteQuestions.push(this.state.randomQuestionIndex)
        if(e.target.value == this.state.randomKey.correctIndex){
            const currentPoints = this.state.points + 1;
            this.setState({
                points: currentPoints
            })
        }
        this.setState({
            randomKey: this.props.data.questions[randomQuestion],
            completeQuestions: currentCompleteQuestions,
            randomQuestionIndex: randomQuestion
        })
    }

    render() {
        return(
            <div className="quizz-container">
                <QuizzQuestions data={this.state.randomKey} />
                <QuizzAnswers data={this.state.randomKey} answer={this.getAnswer}/>
            </div>
        );
    }
}