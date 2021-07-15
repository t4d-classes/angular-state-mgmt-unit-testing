import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppHomeComponent } from './components/app-home/app-home.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', component: AppHomeComponent },
  { path: 'color-tool', loadChildren: () =>
    import('./color-tool/color-tool.module').then(mod => mod.ColorToolModule) },
  { path: 'car-tool', loadChildren: () =>
    import('./car-tool/car-tool.module').then(mod => mod.CarToolModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
