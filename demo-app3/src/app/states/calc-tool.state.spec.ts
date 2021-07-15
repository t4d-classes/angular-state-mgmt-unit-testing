import { TestBed } from '@angular/core/testing';
import { NgxsModule, Store } from '@ngxs/store';

import { CalcToolState } from './calc-tool.state';
import { Add } from '../actions/calc-actions';
  
describe('CalcTool', () => {
  let store: Store;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [NgxsModule.forRoot([CalcToolState])]
    });

    store = TestBed.inject(Store);
  });

  it('adds to result', () => {

    store.dispatch(new Add(10));
    const result = store.selectSnapshot<number>(state => state.calcTool.result);
    expect(result).toBe(10);
  });
});