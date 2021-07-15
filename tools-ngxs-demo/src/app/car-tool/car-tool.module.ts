import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgxsModule } from '@ngxs/store';

import { ToolHeaderComponent } from './components/tool-header/tool-header.component';
import { CarTableComponent } from './components/car-table/car-table.component';
import { CarFormComponent } from './components/car-form/car-form.component';
import { CarViewRowComponent } from './components/car-view-row/car-view-row.component';
import { CarEditRowComponent } from './components/car-edit-row/car-edit-row.component';
import { CarHomeComponent } from './components/car-home/car-home.component';
import { CarToolRoutingModule } from './car-tool-routing.module';

import { CarsState } from './cars.state';

@NgModule({
  declarations: [
    ToolHeaderComponent,
    CarTableComponent,
    CarFormComponent,
    CarViewRowComponent,
    CarEditRowComponent,
    CarHomeComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule,
    CarToolRoutingModule,
    NgxsModule.forFeature([ CarsState ]),
  ],
})
export class CarToolModule { }
