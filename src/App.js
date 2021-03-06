import React, {Component} from 'react';
import QuizzContainer from './Quizz/QuizzContainer';
import Footer from './Footer/Footer';
import quizzData from './Database/quizz.json';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <QuizzContainer data={quizzData}/>
        <Footer />
      </div>
    );
  }
}

export default App;
