import { Component, OnInit } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';

import { Color } from '../../models/color';
import { ColorsState, AppendColor, RemoveColor } from '../../colors.state';

@Component({
  selector: 'app-color-home',
  templateUrl: './color-home.component.html',
  styleUrls: ['./color-home.component.css']
})
export class ColorHomeComponent implements OnInit {

  @Select(ColorsState) colors$: Observable<Color[]>;

  colorContent = (color: Color) => color.name;

  colorId = (color: Color) => color.id;

  constructor(private store: Store) { }

  ngOnInit() { }

  doAppendColor(color: Color) {
    this.store.dispatch(new AppendColor(color));
  }

  doRemoveColor(colorId: number) {
    this.store.dispatch(new RemoveColor(colorId));
  }

}
