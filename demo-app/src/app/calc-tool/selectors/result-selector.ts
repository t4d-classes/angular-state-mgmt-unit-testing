import { ICalcToolStateModel } from '../states/calc-tool.state';

export const resultSelector = (state: { calcTool: ICalcToolStateModel }) => {

  // almost never done JavaScript
  // imperative - how
  // for (let x = 0; x < state.calcTool.history.length; x++) {
  //   // business logic - what
  // }

  // prefer functional approach
  // declarative style

  // forEach - side effect
  // map - transform the array item into a new array
  // filter - remove items from the array
  // flatMap - iterate over an array of arrays and produce flatten array
  // reduce - swiss army knife


  // let result = 0;

  // state.calcTool.history.forEach(entry => {

  //   switch (entry.opName) {
  //     case 'add':
  //       result += entry.opValue;
  //       break;
  //     case 'subtract':
  //       result -= entry.opValue;
  //       break;
  //     case 'multiply':
  //       result *= entry.opValue;
  //       break;
  //     case 'divide':
  //       result /= entry.opValue;
  //       break;
  //   }

  // });

  // return result;

  return state.calcTool.history.reduce((result, entry) => {
    // console.log("result > ", result, "entry > ", entry);
    switch (entry.opName) {
      case 'add':
        return result + entry.opValue;
      case 'subtract':
        return result - entry.opValue;
      case 'multiply':
        return result * entry.opValue;
      case 'divide':
        return result / entry.opValue;
      default:
        return result;
    }
  }, 0);
}