import React, {Component} from 'react';
import QuizzContainer from './Quizz/QuizzContainer';
import Footer from './Footer/Footer';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <QuizzContainer />
        <Footer />
      </div>
    );
  }
}

export default App;
