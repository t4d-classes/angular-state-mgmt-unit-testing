import { Injectable } from "@angular/core";
import { State, Action, StateContext } from "@ngxs/store";

import { Item } from "../models/items";
import { RefreshItems, RemoveItem } from "../actions/item-actions";
import { ItemsService } from "../services/items.service";
import { tap, switchMap } from "rxjs/operators";

export interface ItemToolStateModel {
  items: Item[];
}

@State<ItemToolStateModel>({
  name: 'itemTool',
  defaults: {
    items: [],
  },
})
@Injectable()
export class ItemToolState {

  constructor(private itemsSvc: ItemsService) {}

  @Action(RefreshItems)
  refreshItems(ctx: StateContext<ItemToolStateModel>) {

    console.log("called Refresh Items");

    return this.itemsSvc.all().pipe(tap(items => {
      ctx.patchState({
        items,
      });
    }));
  }

  @Action(RemoveItem)
  removeItem(ctx: StateContext<ItemToolStateModel>, action: RemoveItem) {

    console.log("called Remove Item");

    return this.itemsSvc
      .remove(action.itemId)
      .pipe(switchMap(() => {
        console.log("in the switch map");
        return ctx.dispatch(new RefreshItems()); 
      }));
  }

}