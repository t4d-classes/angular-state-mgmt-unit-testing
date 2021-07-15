import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ColorHomeComponent } from './components/color-home/color-home.component';

const routes: Routes = [
  { path: "", component: ColorHomeComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ColorToolRoutingModule { }
