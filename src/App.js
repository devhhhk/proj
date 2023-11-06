import React, {useState} from 'react';
import './App.css';
import Header from './header';
import Counter from './counter';
import Container from './Container';

function App() {
  const counterProps = {
    initialValue: 5
  }

  return (
    <Container>
      <div className="App">
        <Header></Header>
        <Counter {...counterProps}></Counter>
      </div>
    </Container>
  );
}

export default App;