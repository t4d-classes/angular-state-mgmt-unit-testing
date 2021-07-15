import { State, Action, StateContext } from '@ngxs/store';

import { Color } from './models/color';

export class AppendColor {
  static readonly type = '[Colors] Add Color';
  constructor(public color: Color) { }
}

export class RemoveColor {
  static readonly type = '[Colors] Remove Color';
  constructor(public colorId: number) { }
}

@State<Color[]>({
  name: 'colors',
  defaults: [
    { id: 1, name: 'red' },
    { id: 2, name: 'blue' },
    { id: 3, name: 'green' },
  ],
})
export class ColorsState {

  @Action(AppendColor)
  appendColor(ctx: StateContext<Color[]>, action: AppendColor) {
    const state = ctx.getState();
    ctx.setState(state.concat({
      ...action.color,
      id: Math.max(...state.map(c => c.id), 0) + 1,
    }));
  }

  @Action(RemoveColor)
  removeColor(ctx: StateContext<Color[]>, action: RemoveColor) {
    const state = ctx.getState();
    ctx.setState(state.filter(color => color.id !== action.colorId));
  }

}
