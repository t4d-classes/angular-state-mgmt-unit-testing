import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { NgxsModule } from '@ngxs/store';

import { CalcHomeComponent } from './components/calc-home/calc-home.component';
import { CalcToolState } from './states/calc-tool.state';


@NgModule({
  declarations: [
    CalcHomeComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    NgxsModule.forFeature([CalcToolState])
  ],
  exports: [
    CalcHomeComponent
  ],
})
export class CalcToolModule { }
