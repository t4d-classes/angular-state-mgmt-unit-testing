import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { FormGroup, FormBuilder } from '@angular/forms';

import { Store, Select } from '@ngxs/store';

import { ColorsStateModel, ColorsState } from '../../states/colors.state';
import { StatusStateModel, StatusState } from '../../states/status.state';
import { Color, NewColor } from '../../models/colors';
import { AppendColor, BrokenRefreshColors, RefreshColors, RemoveColor } from '../../actions/colors-actions';

@Component({
  selector: 'app-color-home',
  templateUrl: './color-home.component.html',
  styleUrls: ['./color-home.component.css']
})
export class ColorHomeComponent implements OnInit {

  colorForm!: FormGroup;

  // @Select((state: { colors: ColorsStateModel }) => {
  //   try {
  //     return state.colors;
  //   } catch (err) {
  //     return [];
  //   }
  // })
  // colors$!: Observable<Color[]>;

  @Select(ColorsState.colors)
  colors$!: Observable<Color[]>;

  @Select(StatusState.errorMessage)
  errorMessage$!: Observable<string>;

  constructor(private store: Store, private fb: FormBuilder) { }

  ngOnInit(): void {
    this.colorForm = this.fb.group({
      name: '',
      hexcode: '',
    });

    this.store.dispatch(new RefreshColors());
  }

  doAddColor() {
    const newColor = this.colorForm.value as NewColor;
    this.store.dispatch(new AppendColor(newColor));
  }

  doDeleteColor(colorId: number) {
    this.store.dispatch(new RemoveColor(colorId));
  }

  doBrokenRefresh() {
    this.store.dispatch(new BrokenRefreshColors());
  }

}
