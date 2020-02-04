import React from 'react';
import QuizzQuestions from './QuizzQuestions';
import QuizzAnswers from './QuizzAnswers';

export default class QuizzContainer extends React.Component {
    render() {
        return(
            <div>
                <QuizzQuestions />
                <QuizzAnswers />
            </div>
        );
    }
}