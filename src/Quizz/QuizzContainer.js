import React from 'react';
import QuizzQuestions from './QuizzQuestions';
import QuizzAnswers from './QuizzAnswers';
import QuizzResetButton from './QuizzResetButton';
import './css/QuizzContainer.css';

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
    }

    getAnswer(e) {
        const randomQuestion = Math.floor(Math.random() * this.props.data.questions.length);
        const currentCompleteQuestions = this.state.completeQuestions;
        if(currentCompleteQuestions.length === this.props.data.questions.length) {
            alert(`Koniec gry twoje punkty: ${this.state.points}`);
        } else {
            if(!currentCompleteQuestions.includes(randomQuestion)) {
                currentCompleteQuestions.push(randomQuestion);
                this.setState({
                    randomKey: this.props.data.questions[randomQuestion],
                    completeQuestions: currentCompleteQuestions
                });
                console.log(e.target.value);
                console.log(this.state.randomKey.correctIndex);
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
                <QuizzResetButton />
            </div>
        );
    }
}