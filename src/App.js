import React, { Component } from 'react';
import './App.css';

// Import the whole library
// import _ from 'lodash';

// Import specific methods inside of curly brackets
// import { get, tail, times, uniq } from 'lodash';

// Import specific methods inside of curly brackets
// import get from 'lodash/get';
// import tail from 'lodash/tail';
// import times from 'lodash/times';
// import uniq from 'lodash/uniq';

// Import specific methods inside of curly brackets
import get from 'lodash.get';
import tail from 'lodash.tail';
import times from 'lodash.times';
import uniq from 'lodash.uniq';

const FIELD_TYPE_CONFIG = {
  number: {
    styles: {
      textAlign: 'right',
    },
  },
};

class App extends Component {
  getFieldTypeConfig(path) {
    if (typeof path === 'string' || Array.isArray(path)) {
      // return _.get(FIELD_TYPE_CONFIG, path)
      return get(FIELD_TYPE_CONFIG, path)
    }
    return {};
  };

  render() {

    const numbers = [1, 5, 8, 10, 1, 5, 15, 42, 5];

    // const uniqNumbers = _.uniq(numbers);
    const uniqNumbers = uniq(numbers);
    // Result: [1, 5, 8, 10, 15, 42]

    // const tailNumbers = _.tail(numbers);
    const tailNumbers = tail(numbers);
    // Result: [5, 8, 10, 1, 5, 15, 42, 5]

    const getRandomNumber = () => { return Math.round(Math.random() * 100); };

    // const randomNumbers = _.times(8, getRandomNumber);
    const randomNumbers = times(8, getRandomNumber);
    // Result: [58, 9, 98, 54, 96, 24, 25, 74]

    const styles = this.getFieldTypeConfig('number.styles');
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
