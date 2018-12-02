import React, { Component } from 'react';
import './App.css';
import { numbers, uniqNumbers, tailNumbers, randomNumbers, FIELD_TYPE_CONFIG, styles } from './methods';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <a
            className="App-link"
            href="https://github.com/whwiGrado/correct-way-to-import-lodash"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn the Correct Way to Import Lodash Libraries
          </a>
          <ul>
            <li>base numbers array: {JSON.stringify(numbers)}</li>
            <li>uniqNumbers: {JSON.stringify(uniqNumbers)}</li>
            <li>tailNumbers: {JSON.stringify(tailNumbers)}</li>
            <li>randomNumbers: {JSON.stringify(randomNumbers)}</li>
          </ul>
          <ul>
            <li>base object: </li>
            <li>{JSON.stringify(FIELD_TYPE_CONFIG, 0, 2)}</li>
            <li>get number.styles from object: </li>
            <li>{JSON.stringify(styles, 0, 2)}</li>
          </ul>
        </header>
      </div>
    );
  }
}

export default App;
