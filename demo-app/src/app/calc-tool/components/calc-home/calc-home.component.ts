import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { FormControl } from '@angular/forms';

import { Store, Select } from '@ngxs/store';

import { ICalcToolStateModel } from '../../states/calc-tool.state';
import { Add, Subtract, Multiply, Divide } from '../../actions/calc-actions';
import { HistoryEntry } from '../../models/history';
import { DeleteHistoryEntry } from '../../actions/history-actions';

@Component({
  selector: 'app-calc-home',
  templateUrl: './calc-home.component.html',
  styleUrls: ['./calc-home.component.css']
})
export class CalcHomeComponent implements OnInit {

  numInput = new FormControl(0);

  @Select((state: { calcTool: ICalcToolStateModel }) => {
    return state.calcTool.result;
  })
  result$!: Observable<number>;

  @Select((state: { calcTool: ICalcToolStateModel }) => {
    return state.calcTool.history;
  })
  history$!: Observable<HistoryEntry[]>;


  constructor(private store: Store) { }

  ngOnInit(): void {
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


}
