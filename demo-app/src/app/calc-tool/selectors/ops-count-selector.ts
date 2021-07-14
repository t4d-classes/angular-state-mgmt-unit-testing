import { ICalcToolStateModel } from '../states/calc-tool.state';

export const opsCountSelector = (state: { calcTool: ICalcToolStateModel }) => {

  return state.calcTool.history.reduce((opsCount, entry) => {
    switch (entry.opName) {
      case 'add':
        opsCount[0]++;
        break;
      case 'subtract':
        opsCount[1]++;
        break;
      case 'multiply':
        opsCount[2]++;
        break;
      case 'divide':
        opsCount[3]++;
        break;
    }
    return opsCount;

  }, [0, 0, 0, 0]);
}