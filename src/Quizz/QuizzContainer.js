import React from 'react';
import QuizzQuestions from './QuizzQuestions';
import QuizzAnswers from './QuizzAnswers';
import './css/QuizzContainer.css';

export default class QuizzContainer extends React.Component {
    render() {
        return(
            <div className="quizz-container">
                <QuizzQuestions />
                <QuizzAnswers />
            </div>
        );
    }
}