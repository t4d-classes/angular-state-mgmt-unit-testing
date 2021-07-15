import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { CarHomeComponent } from './car-tool/components/car-home/car-home.component';
import { UserAccountsHomeComponent } from './user-accounts/components/user-accounts-home/user-accounts-home.component';
import { CalcHomeComponent } from './calc-tool/components/calc-home/calc-home.component';

const routes: Routes = [
  { path: "user-accounts", component: UserAccountsHomeComponent }, // does not use NGXS
  {
    path: "color-tool",
    loadChildren: () => import('./color-tool/color-tool.module').then(m => m.ColorToolModule),
  }, // does use NGXS
  { path: "car-tool", component: CarHomeComponent }, // does not use NGXS
  { path: "calc-tool", component: CalcHomeComponent }, // does use NGXS
  { path: "", component: HomeComponent },
  { path: "", pathMatch: "full", redirectTo: "/home" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
