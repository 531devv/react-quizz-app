import React from 'react';
import './css/QuizzQuestions.css';
import QuizzQuestion from './QuizzQuestion';

export default class QuizzQuestions extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="quizz-questions">
                <QuizzQuestion data={this.props.data}/>
            </div>
        );
    }
}