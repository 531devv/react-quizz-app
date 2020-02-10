import React from 'react';
import './css/QuizzAnswer.css';

export default class QuizzAnswer extends React.Component {
    render() {
        return (
            <div className="quizz-answer">
                <div className="grid">
                    <div className="grid-item">10</div>
                    <div className="grid-item">10</div>
                    <div className="grid-item">10</div>
                    <div className="grid-item">10</div>
                </div>
            </div>
        );
    }
}