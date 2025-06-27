import React from 'react';
import './App.css';
import InputComponent from './components/Input/Input';

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <InputComponent />
        <p>Hello</p>
      </header>
    </div>
  );
}

export default App;
