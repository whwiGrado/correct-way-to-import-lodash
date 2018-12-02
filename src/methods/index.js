// import _ from './1';
// const { get, tail, times, uniq } = _;

// import { get, tail, times, uniq } from './2';
// import { get, tail, times, uniq } from './3';
import { get, tail, times, uniq } from './4';


export const numbers = [1, 5, 8, 10, 1, 5, 15, 42, 5];

// const uniqNumbers = _.uniq(numbers);
export const uniqNumbers = uniq(numbers);
// Result: [1, 5, 8, 10, 15, 42]

// const tailNumbers = _.tail(numbers);
export const tailNumbers = tail(numbers);
// Result: [5, 8, 10, 1, 5, 15, 42, 5]

const getRandomNumber = () => { return Math.round(Math.random() * 100); };

// const randomNumbers = _.times(8, getRandomNumber);
export const randomNumbers = times(8, getRandomNumber);
// Result: [58, 9, 98, 54, 96, 24, 25, 74]

function getFieldTypeConfig(path) {
  if (typeof path === 'string' || Array.isArray(path)) {
    // return _.get(FIELD_TYPE_CONFIG, path)
    return get(FIELD_TYPE_CONFIG, path)
  }
  return {};
}

export const FIELD_TYPE_CONFIG = {
  number: {
    styles: {
      textAlign: 'right',
    },
  },
};

export const styles = getFieldTypeConfig('number.styles');