import React, { Component } from 'react';
import './css/QuizzResetButton.css';

export default class QuizzResetButton extends Component {
    render() {
        return (
            <div className="quizz-reset-button">
                <button type="submit" onClick={this.props.restart}>Restart</button>
            </div>
        )
    }
}
