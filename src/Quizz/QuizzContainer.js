import React from 'react';
import QuizzQuestions from './QuizzQuestions';
import QuizzAnswers from './QuizzAnswers';
import QuizzResetButton from './QuizzResetButton';
import './css/QuizzContainer.css';
import QuizzScore from './QuizzScore';

export default class QuizzContainer extends React.Component {
    constructor(props) {
        super(props);
        const randomQuestion = Math.floor(Math.random() * this.props.data.questions.length);
        this.state = {
            randomKey: this.props.data.questions[randomQuestion],
            points: 0,
            completeQuestions: [randomQuestion]
        }
        this.getAnswer = this.getAnswer.bind(this);
        this.restart = this.restart.bind(this);
    }

    restart() {
        const randomQuestion = Math.floor(Math.random() * this.props.data.questions.length);
        this.setState({
            points: 0,
            randomKey: this.props.data.questions[randomQuestion],
            completeQuestions: [randomQuestion]
        });
    }

    getAnswer(e) {
        const randomQuestion = Math.floor(Math.random() * this.props.data.questions.length);
        const currentCompleteQuestions = this.state.completeQuestions;
        if(currentCompleteQuestions.length === this.props.data.questions.length) {
            alert(`It's end, your score: ${this.state.points}`);
        } else {
            if(!currentCompleteQuestions.includes(randomQuestion)) {
                currentCompleteQuestions.push(randomQuestion);
                this.setState({
                    randomKey: this.props.data.questions[randomQuestion],
                    completeQuestions: currentCompleteQuestions
                });
                if(e.target.value == this.state.randomKey.correctIndex){
                    const currentPoints = this.state.points + 1;
                    this.setState({
                        points: currentPoints
                    })
                }
            } else {
                this.getAnswer(e);
            }
        }
        
    }

    render() {
        return(
            <div className="quizz-container">
                <QuizzQuestions data={this.state.randomKey} />
                <QuizzAnswers data={this.state.randomKey} answer={this.getAnswer}/>
                <QuizzScore points={this.state.points} />
                <QuizzResetButton restart={this.restart} />
            </div>
        );
    }
}