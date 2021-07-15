import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { FormControl } from '@angular/forms';

import { Store, Select } from '@ngxs/store';

import { ICalcToolStateModel } from '../../states/calc-tool.state';
import { Add, Subtract, Multiply, Divide } from '../../actions/calc-actions';
import { HistoryEntry } from '../../models/history';
import { ClearHistory, DeleteHistoryEntry, RefreshHistory } from '../../actions/history-actions';
import { resultSelector } from '../../selectors/result-selector';
import { opsCountSelector } from '../../selectors/ops-count-selector';

@Component({
  selector: 'app-calc-home',
  templateUrl: './calc-home.component.html',
  styleUrls: ['./calc-home.component.css']
})
export class CalcHomeComponent implements OnInit {

  numInput = new FormControl(0);

  @Select(resultSelector)
  result$!: Observable<number>;

  @Select(opsCountSelector)
  opsCount$!: Observable<number[]>;

  @Select((state: { calcTool: ICalcToolStateModel }) => {
    return state.calcTool.history;
  })
  history$!: Observable<HistoryEntry[]>;

  @Select((state: { calcTool: ICalcToolStateModel }) => {
    return state.calcTool.errorMessage;
  })
  errorMessage$!: Observable<string>;

  constructor(private store: Store) { }

  ngOnInit(): void {
    this.store.dispatch(new RefreshHistory());
  }

  doAdd() {
    this.store.dispatch(new Add(this.numInput.value));
  }

  doSubtract() {
    this.store.dispatch(new Subtract(this.numInput.value));
  }

  doMultiply() {
    this.store.dispatch(new Multiply(this.numInput.value));
  }

  doDivide() {
    this.store.dispatch(new Divide(this.numInput.value));
  }

  doDeleteHistoryEntry(entryId: number) {
    this.store.dispatch(new DeleteHistoryEntry(entryId));
  }

  doClear() {
    this.numInput.setValue(0);
    this.store.dispatch(new ClearHistory());
  }


}
