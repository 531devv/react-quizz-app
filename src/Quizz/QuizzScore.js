import React, { Component } from 'react';
import './css/QuizzScore.css';

export default class QuizzScore extends Component {
    render() {
        return (
            <div className="quizz-score">
                <p>Score: {this.props.points}</p>
            </div>
        )
    }
}
