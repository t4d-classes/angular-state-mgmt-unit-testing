import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { FormControl } from '@angular/forms';

import { Store, Select } from '@ngxs/store';

import { ICalcToolStateModel } from '../../states/calc-tool.state';
import { Add, Subtract } from '../../actions/calc-actions';

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

  constructor(private store: Store) { }

  ngOnInit(): void {
  }

  doAdd() {
    this.store.dispatch(new Add(this.numInput.value));
  }

  doSubtract() {
    this.store.dispatch(new Subtract(this.numInput.value));
  }

}
