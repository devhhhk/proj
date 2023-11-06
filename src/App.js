import React from 'react';
//import './App.css';
import Header from './header';

function App() {
  let name = "GDSC";

  const style = {
    App: {
      backgroundColor: 'black',
    },
    h1: {
      color: 'red',
    },
    bold_text: {
      color: 'green',
    },
  }

  const number = 5;

  return (
    <div className="App" style={style.App}>
      <Header></Header>
      <h1 style={style.h1}>Hi, React! Bye, JavaScript!</h1>
      <b style={style.bold_text} id='bold_text'>
        {number}는 {(number % 2 === 0) ? '짝수': '홀수'}입니다.
      </b>
    </div>
  );
}

export default App;